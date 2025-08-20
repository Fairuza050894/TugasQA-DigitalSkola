it('fill name & password', async () => {
    await $('~App').click();
    await $('~Alert Dialogs').click();
    await $('~Text Entry dialog').click();

    // isi field Name
    await $('(//android.widget.EditText)[1]').setValue("MyName");

    // isi field Password
    await $('(//android.widget.EditText)[2]').setValue("MyPass");

});
