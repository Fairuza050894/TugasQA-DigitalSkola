const assert = require('chai').assert;

describe('PATCH - Update User', function () {
    const url = 'https://reqres.in/api/users/2';
    const headers = {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
    };

    it('should update user successfully', async function () {
        const res = await fetch(url, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({
                name: "Fairuza",
                job: "Senior QA Engineer"
            })
        });
        const data = await res.json();
        console.log('PATCH Response:', res.status, data);
        assert.strictEqual(res.status, 200, 'Status code should be 200');
        assert.exists(data.updatedAt, 'Response should contain updatedAt timestamp');
    });
});
