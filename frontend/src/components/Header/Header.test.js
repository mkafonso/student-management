import React from "react";
import { shallow } from "enzyme";

// import helpers
import { findByTestAttr } from "../../test/helpers";

import Header from "./Header";

describe("<Header />", () => {
  it("should render Header component", () => {
    const wrapper = shallow(<Header />);
    const component = findByTestAttr(wrapper, "component-header");

    expect(component).toHaveLength(1);

    component.unmount();
  });
});
