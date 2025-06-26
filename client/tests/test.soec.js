const { mount } = require("@vue/test-utils");
const HelloWorld = require("../src/components/HelloWorld.vue");

describe("HelloWorld.vue", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain("Hello");
  });
});
