import TestRenderer from "react-test-renderer";

import { MonoText } from "../StyledText";

it(`renders correctly`, () => {
  const tree = TestRenderer.create(<MonoText>Snapshot test!</MonoText>);

  expect(tree.toJSON()).toMatchSnapshot();
});
