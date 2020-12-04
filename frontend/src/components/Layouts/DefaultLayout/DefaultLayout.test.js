import React from "react";
import { shallow } from "enzyme";

// import helpers
import { findByTestAttr } from "../../../test/helpers";

import DefaultLayout from "./DefaultLayout";

const defaultProps = {
  children: null,
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };

  return shallow(<DefaultLayout {...setupProps} />);
};

describe("<DefaultLayout />", () => {
  describe("when children is defined", () => {
    it("should render without error", () => {
      const wrapper = setup({
        children: <p>Ola mundo</p>,
      });

      const component = findByTestAttr(wrapper, "defaultLayout");

      expect(component).toHaveLength(1);

      component.unmount();
    });
  });

  describe("when children is not defined", () => {
    it("should not render", () => {
      const wrapper = setup({
        children: false,
      });

      const component = findByTestAttr(wrapper, "defaultLayout");

      expect(component).toHaveLength(0);

      component.unmount();
    });
  });
});
