requirejs.config({
    baseUrl: "js/",
    paths: {
        qunit: "../Scripts/qunit-1.14.0"
    },
    shim: {
        qunit: {
            exports: "QUnit"
        }
    }
});

require(["qunit"], function (QUnit) {
    QUnit.load();

    QUnit.test("hello test", function (assert) {
        assert.ok(1 == "1", "Passed!");
    })
});