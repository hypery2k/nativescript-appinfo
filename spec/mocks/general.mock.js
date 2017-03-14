import mockery from "mockery";
mockery.enable();
mockery.registerMock("application", {});
mockery.registerMock("platform", {});
mockery.registerMock("utils/utils", {});