import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import About from "./About";

describe("About container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<About />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
