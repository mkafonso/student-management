import React from "react";
import { shallow } from "enzyme";

// import helpers
import { findByTestAttr } from "../test/helpers";

import Routes from "./index";

describe("<Routes />", () => {
  it("should render Dashboard component", () => {
    const wrapper = shallow(<Routes />);
    const component = findByTestAttr(wrapper, "component-dashboard");

    expect(component).toHaveLength(1);

    component.unmount();
  });

  it("should render StudentList component", () => {
    const wrapper = shallow(<Routes />);
    const component = findByTestAttr(wrapper, "component-studentList");

    expect(component).toHaveLength(1);

    component.unmount();
  });
});
