import React from "react";

import styled from "styled-components";
import renderer from "react-test-renderer";
import "jest-styled-components";

import Article from "./Article";

describe("Article container", function() {
  it("should not overflow", () => {
    const wrapper = renderer.create(<Article />).toJSON();
    expect(wrapper).toHaveStyleRule("overflow", "hidden");
  });
});
