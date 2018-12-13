import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Logo from "./Logo";

describe("Logo container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Logo />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
