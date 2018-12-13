import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Article from "./Article";
import description from "./Article.md";

storiesOf("Components/Article", module).add("Overview", () => <Article />, {
  info: {
    inline: true,
    text: description
  }
});
