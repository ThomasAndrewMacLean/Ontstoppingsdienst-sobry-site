const express = require('express');
const app = express();
const fetch = require('node-fetch');

var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base('appjdfMmvID6nx1jZ');

app.get('/', function(req, res) {
    res.json('hello');
});

app.get('/test/:branch', function(req, res) {
    const branch = req.params.branch;
    res.json({ branch });
});

app.get('/updateLabels/:branch', function(req, res) {
    const branch = req.params.branch;
    const labels = {};

    base('Labels')
        .select({
            maxRecords: 100,
            view: 'Grid view',
        })
        .eachPage(
            records => {
                records.forEach(record => {
                    if (record.get('id')) {
                        labels[record.get('id')] = record.get('label');
                    }
                });
                console.log(labels);

                fetch(process.env.GITHUB_URL + '?ref=' + branch, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
                    },
                })
                    .then(rest => rest.json())
                    .then(result => {
                        let labelsString = `const labels = ${JSON.stringify(labels)};export default labels;`;

                        fetch(process.env.GITHUB_URL, {
                            method: 'PUT',
                            body: JSON.stringify({
                                message: 'updating the labelzzz',
                                branch: branch,
                                committer: {
                                    name: 'ThomasAndrewMacLean',
                                    email: 'hello@thomasmaclean.be',
                                },
                                content: Buffer.from(labelsString).toString('base64'),
                                sha: result.sha,
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + process.env.GITHUB_TOKEN,
                            },
                        })
                            .then(aaa => aaa.json())
                            .then(result => {
                                res.json({ labels, result });
                            });
                    });
            },
            function done(err) {
                if (err) {
                    console.error(err);
                    return;
                }
            },
        );
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});
