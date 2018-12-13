import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

import Logo from "./Logo";
import description from "./Logo.md";

storiesOf("Components/Logo", module).add("Overview", () => <Logo />, {
  info: {
    inline: true,
    text: description
  }
});
