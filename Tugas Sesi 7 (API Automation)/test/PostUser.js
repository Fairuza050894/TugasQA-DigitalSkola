const assert = require('chai').assert;

describe('POST - Create User', function () {
    const url = 'https://reqres.in/api/users';
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
    };

    it('should create a user successfully', async function () {
        const res = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                name: "Fairuza",
                job: "QA Engineer"
            })
        });
        const data = await res.json();
        console.log('POST Response:', res.status, data);
        assert.strictEqual(res.status, 201, 'Status code should be 201');
        assert.strictEqual(data.name, "Fairuza");
        assert.strictEqual(data.job, "QA Engineer");
        assert.exists(data.createdAt, 'createdAt timestamp should exist');
    });
});
