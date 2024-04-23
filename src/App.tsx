import type { JSX } from 'solid-js';
import Comp2 from './Comp2';
import Comp1 from './Comp1';

const FakeNestedView = (props: { component: () => JSX.Element, children?: JSX.Element }) => {
  return <>
    {props.component()}
    <br />
    {props.children}
  </>
}

const LocalComp1 = () => <>1</>
const LocalComp2 = () => <>2</>

// Rename this with export default function App()
// To remove the bug
export default function App() {
  return (
    <>
      Foreign Component
      <br/>
      <FakeNestedView component={Comp1}>
        <FakeNestedView component={Comp2}>
          HELLO WORLD
        </FakeNestedView>
      </FakeNestedView>
      <hr />
      Arrow function:
      <br/>
      <FakeNestedView component={() => <> 1</>}>
        <FakeNestedView component={() => <>2</>}>
            HELLO WORLD
        </FakeNestedView>
      </FakeNestedView>
      <hr />
      Local Component
      <br/>
      <FakeNestedView component={LocalComp1}>
        <FakeNestedView component={LocalComp2}>
          HELLO WORLD
        </FakeNestedView>
      </FakeNestedView>
    </>
  );
};
