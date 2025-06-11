/* FRAMEWORKS AND LibRARIES */

const state = [
  {
    id: "todo-0",
    name: "Learn some frameworks!",
  },
];

// How to show one of these tasks to our users? Each task must be represented as a list item. How to implement this...
function buildToDoItemEl(id, name) {
  // document.createElement: Make <li> for each task.
  const item = document.createElement("li");
  const span = document.createElement("span");

  // Set properties and child elements as necessary
  span.textContent = name;

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}

// Invoked by buildToDoItemEl; results in non-flat code.
function buildDeleteButtonEl(id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.textContent = "Delete";

  // As of yet this does nothing.
  return button;
}

// To render the items onto the page.
function renderTodoList() {
  const frag = document.createDocumentFragment();
  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.firstChild) {
    todoListEl.removeChild(todoListEl.firstChild);
  }
  todoListEl.appendChild(frag);
}

/* Vue: Reducing thirty or so lines of code to six, the same exact number of
 * survivors from that Titanic incident.
 * <ul>
 *   <li v-for="task in tasks" v-bind:key="task.id">
 *     <span>{{ task.name }}</span>
 *     <button type="button">Delete</button>
 *   </li>
 * </ul>
 */


/* MAIN-FEATURES */

function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} >
      <figcaption>{props.byline}</figcaption>
    </figure>
  )
}

/* # Writing components (props) #
 * props.{src,alt,byline} represent where our props will be inserted into the
 * component.
 * To render this component, call the `AuthorCredit` function where it is to be
 * rendered, like so:
 * <figure>
 *  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" >
 *  <figcaption>Zelda Schiff is editor-in-chief of the Library
 *  Times.</figcaption>
 * </figure>
 */

function CounterButton() {
  // Tracks how many times a button is clicked on.
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}

/* # Writing components (state) #
 * `useState` is a React hook that keeps track of a value as it is being
 * updated. This enables one to track the value in `count` in a robust way
 * across your application without a possibly clumsy implementation.
 */

function CounterButton() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  )
}

/* # Writing components (events) #
 * Listening for the `click` event wants a special property, `onClick`.
 * Here, the `useState` is used in order to create a special `setCount`
 * function, which can be invoked to update the value in `count`. This function
 * is called inside the `onClick` handler to increment `count` by one.
 */

import AuthorCredit from "./components/AuthorCredit"

// Once that's done, `AuthorCredit` can be used inside an `Article` component like
// so.

<Article>
  <AuthorCredit />
</Article>

<App>
  <Home>
    <Article>
      <AuthorCredit {/* props */} />
    </Article>
  </Home>
</App>

/* # Dependency injection #
 * It can be such a pain to pass down props from `App` to `AuthorCredit`. One
 * would have to pass props to App, then to Home, then to Article, and then have
 * the desired data finally reach `AuthorCredit`. **Dependency injection**
 * circumvents this by enabling users to insert the data into `AuthorCredit`
 * without needing to pipe it through any intermediaries.
 */

// demo of React testing
import { fireEvent, render, screen } from "@testing-library/react";
// tests: existence of button; button-text post-click; etc.

import CounterButton from "./CounterButton";

it("Renders a semantic button with an initial state of 0", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  render(<CounterButton />);
  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});


