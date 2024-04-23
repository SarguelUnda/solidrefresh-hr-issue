import type { JSX } from 'solid-js';

const FakeNestedView = (props: { component: () => JSX.Element, children?: JSX.Element }) => {
  return <>
    {props.component()}
    <br />
    {props.children}
  </>
}

const Comp1 = () => <>123</>
const Comp2 = () => <>456</>

export default function () {
  return (
    <>
    {/* Hot reload doesn't work here */}
      <FakeNestedView component={() => <>123</>}>
        <FakeNestedView component={() => <>456</>}>
          HELLO WORLD
        </FakeNestedView>
      </FakeNestedView>
      <br/>
      {/* Hot reload work here */}
      <FakeNestedView component={Comp1}>
        <FakeNestedView component={Comp2}>
          HELLO WORLD
        </FakeNestedView>
      </FakeNestedView>
    </>
  );
};
