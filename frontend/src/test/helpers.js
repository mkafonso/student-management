import checkPropTypes from "check-prop-types";

export const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
};

export const checkProps = (component, confirmingProps) => {
  const propError = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    confirmingProps,
    "prop",
    component.name
  );

  expect(propError).toBeUndefined();
};
