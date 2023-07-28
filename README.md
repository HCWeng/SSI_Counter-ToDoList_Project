# SSI_Counter-ToDoList_Project
## I. Counter part.
- The component should be created:`<COUNTER /> <COUNT /> <BUTTONROW />`.
- Build a counter component that meets the following features:
	1. Display current count at the top.
	2. The row under current count should contain two buttons side by side, Increment and Decrement buttons, which will increase/decrease the count by 1 per click.
	3. the row under Inc/Dec row should contain two buttons side by side, Increment-If-Odd and Async-Inc buttons, which will increase the current count by 1 only if the current count is odd number (Increment-If-Odd) after a second delay upon the click (Async-Inc)
	4. Another new row contains a timer-add-button The button displays "Start" initially
upon clicking it will start increasing the counter by 1 per second and displays "Stop" clicking again will stop the increase and switch the button text to "Start"

------------

## To-do List part.
- The component should be created:`<TdList /> <InputField /> <ItemList /> <Item />`.
- Build a to-do list component that meets the following features:
	1. input field ay the top and an Add button by its right side Clicking the add button will add the current input value as a new item to the list below.
	2. A list below that displays current items in the to-do list.
	3. Each item should have its own Delete button by its right side Clicking the delete button should remove the item from the list.
	4. A sort drop-down by the Add button at the top which upon selecting will sort the to-do list alphabetically Two options of the drop-down are "A-Z" and "Z-A".
- Visibility Container Component `<ContentContainer>` Implement a container component to control the visibility of the above two components This component should contain logic to alter the visibility of theCounter and To-do List components (For instance, two checkboxes for each component and when checked/unchecked, display/hide it) Recommend use HOC as component wrapper to add extra visible prop to each component.

------------
## Notes:
1. Use Codesandbox for the assignment for convenience and submit the code to Github
2. Style is not the priority for this assignment and use CSS to achieve the decent layout (you can use React Inline Style or separate CSS files).
3. Recommend to split component in separate files for github submission but you can put all component in one file when testing on Codesandbox.


------------

