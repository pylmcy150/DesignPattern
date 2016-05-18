requirejs.config({
    baseUrl: "Scripts/js/pattern",
    paths: {
        qunit: "../../qunit-1.14.0",
        singleton: "singleton"
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

    require(["singleton"], function (singleton) {
        var s1 = singleton.getInstance();
        var s2 = singleton.getInstance();
        QUnit.test("singleton", function (assert) {
            assert.ok(s1 === s2, "Passed!");
        });
    });
});