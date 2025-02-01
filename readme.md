# Restaurant Listing Application

A React-based restaurant listing application that allows users to search and filter restaurants fetched from the Swiggy API.

## Features

### 1. Restaurant Listing
- Displays a grid of restaurant cards
- Each card shows restaurant information including name, ratings, and other details
- Implements a shimmer UI effect while data is loading

### 2. Search Functionality
The application includes a real-time search feature that allows users to find restaurants by name:

```javascript
// Search implementation
const filteredRestaurant = allResList.filter((res) => 
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
);
```

#### How Search Works:
1. User types in the search box
2. Search text is stored in state: `searchText`
3. When search button is clicked, it filters the master list
4. Results are displayed instantly
5. Case-insensitive search for better user experience

### 3. Filtering System
Includes a "Top Rated Restaurant" filter that shows restaurants with ratings > 4.5:

```javascript
// Filter implementation
const FilteredList = allResList.filter(res => res.info.avgRating > 4.5);
```

### 4. Reset Functionality
Allows users to reset all filters and searches to view the complete restaurant list:

```javascript
// Reset implementation
setResList(allResList);
setSearchText("");
```

## State Management

The application uses three main state variables:

```javascript
const [allResList, setAllResList] = useState([]); // Master list
const [resList, setResList] = useState([]);       // Display list
const [searchText, setSearchText] = useState(''); // Search input
```

### State Purpose:
- `allResList`: Master list that never changes after initial load
- `resList`: List that's displayed and changes with filters/searches
- `searchText`: Manages the search input value

## Data Flow

1. **Initial Load**
   - Fetches data from Swiggy API
   - Sets both `allResList` and `resList`
   - Shows shimmer effect while loading

2. **Search Process**
   - Updates `searchText` as user types
   - Filters `allResList` based on search
   - Updates `resList` with results

3. **Filter Process**
   - Filters `allResList` based on rating
   - Updates `resList` with filtered data

4. **Reset Process**
   - Restores `resList` to original `allResList`
   - Clears search input

## API Integration

The application fetches data from the Swiggy API:

```javascript
const fetchData = async () => {
    const LiveData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const JsonData = await LiveData.json()
    // Process and set data
}
```

## Component Structure

```
Body Component
│
├── Filter & Search Section
│   ├── Search Input
│   ├── Search Button
│   ├── Reset Button
│   └── Top Rated Filter Button
│
└── Restaurant Container
    └── Restaurant Cards
```

## Usage

To use the search functionality:
1. Type restaurant name in search box
2. Click search button
3. Results will be filtered based on input

To use the filter:
1. Click "Top Rated Restaurant" button
2. View restaurants with ratings > 4.5

To reset:
1. Click the reset button
2. View complete restaurant list

## Implementation Details

### Search Text Update
```javascript
onChange={(e) => {
    setSearchText(e.target.value)
}}
```
- Triggers on every keystroke
- Updates searchText state
- Maintains controlled input behavior

### Filter Implementation
```javascript
onClick={() => {
    const FilteredList = allResList.filter(res => res.info.avgRating > 4.5);
    setResList(FilteredList);
}}
```
- Filters based on rating criteria
- Updates display list
- Maintains original data integrity

### Reset Implementation
```javascript
onClick={() => {
    setResList(allResList);
    setSearchText("");
}}
```
- Restores original list
- Clears search input
- Provides clean slate for new searches

## Development

To add new features:
1. Maintain the separation between `allResList` and `resList`
2. Add new state variables as needed
3. Implement new filters following existing pattern
4. Update UI to reflect new functionality

## Best Practices Used

1. **State Management**
   - Clear separation of concerns
   - Maintained data integrity
   - Controlled components

2. **Performance**
   - Efficient filtering
   - Loading state handling
   - Optimized re-renders

3. **User Experience**
   - Immediate feedback
   - Clear interface
   - Multiple filtering options

4. **Code Organization**
   - Logical component structure
   - Clear naming conventions
   - Well-documented functions


### react-router-dom

   -When using createBrowserRouter, it's essential to follow best practices to ensure maintainable and    scalable routing in your React application:

   Define routes using an array of route objects to keep routing configuration centralized and easily manageable.

   Use the element property to associate components with routes, maintaining a clear separation between routing logic and component structure.

   Implement nested routes to reflect the hierarchical nature of your application's UI.
   Protect sensitive routes with authentication checks and use the Navigate component for redirection when necessary.
   
   Handle routing errors with a catch-all route to improve the user experience.
   By adhering to these practices, developers can create robust and user-friendly routing in their React applications.


### Working Behind the Scene

### Restaurant List Rendering Documentation
      Component Overview

      The restaurant list section is a crucial part of our application that handles the display and navigation of restaurant cards. It transforms an array of restaurant data into clickable, visual components that users can interact with.

### Code Structure

<div className='Res-Container'>
    {resList.map((restaurant) => (
        <Link to={'/restaurants/' + restaurant.info.id} key={restaurant.info.id}>
            <ResCard resData={restaurant} />
        </Link>
    ))}
</div>

### Flow of Execution

1.Container Initialization

The Res-Container div is created as a wrapper
Acts as a grid/flex container for restaurant cards
Manages the layout and spacing of cards


2.Data Mapping Process

resList array is accessed from component state
.map() iterates through each restaurant object
Creates a new set of elements for each restaurant

3.For Each Restaurant

   Restaurant Data → Link Component → ResCard Component → Visual Card

a. Link Creation

Generates a unique URL using restaurant ID
Example: /restaurants/123456
Enables client-side routing

b. Key Assignment

Each Link gets a unique key prop
Uses restaurant ID for identification
Helps React efficiently update the DOM

c. Card Generation

Creates a ResCard component
Passes restaurant data via resData prop
Renders restaurant information visually

4.User Interaction Flow

   User Click → URL Update → Route Change → New Page Load

   User clicks a restaurant card
   React Router updates the URL
   Application navigates to restaurant details page
   All happens without full page refresh


### Data Flow Diagram

   resList (State)
         ↓
   Map Operation
         ↓
   Link Components
         ↓
   ResCard Components
         ↓
   Visual Output


### Key Features

Dynamic Routing: Automatically generates URLs based on restaurant IDs
Efficient Rendering: Uses React's key prop for optimal performance
Component Reusability: Separates card rendering into its own component
Seamless Navigation: Provides smooth transitions between views


### Dependencies

React Router DOM for navigation (Link component)
Custom ResCard component for rendering
State management from parent component

### Common Use Cases

Displaying filtered restaurant results
Showing search results
Rendering category-specific restaurants
Managing dynamic restaurant lists

### Performance Considerations

Uses unique keys for optimal rendering
Implements client-side routing for faster navigation
Efficiently handles large lists through virtual rendering


### Class Based componet Life Cycle

As soon as the componet is renderd or mounted the instance is creted and constructor is called after the constructor render() is called and if React found any child component in the parent component then it loads the child componet it follows same cycle child constructor is called and child render is called

Parent Constructor -> Parent Render -> Child Constructor -> Child Render

Then comes into the picture the superpower of react componentDidMount() method 

Why we use the componentDidMount() in class based componet

because to do API call in the class based component

### Why we use componentDidMount() to do the API call inside the CBC
Because it allows rendering the information as soon as possible.
First, React will render the component with whatever data it has. After that, the API call will fetch the data and update the component.

### Updated Life Cycle

Parent Constructor -> Parent Render -> Child Constructor -> Child Render -> componentDidMount(Child) ->componentDidMount(Parent)

### What if we have multiple children in the parent class, how will it work?

As soon as the component renders, the Parent constructor will render and move to the Parent render(). 
When it comes to the first Child class, it will start to render the Child constructor and after that the Child render. Next, it will not execute the componentDidMount() function immediately. It will batch all child class components and complete their constructors and renders. After that, componentDidMount() will execute. This is known as the render phase.

After the execution of all Child constructors and renders, React will start the commit phase. In this phase, it will start to execute the componentDidMount() functions. This phase is known as the commit phase.

### Two Phase

React's rendering process can be divided into two main phases: the render phase and the commit phase.

1. **Render Phase**: During the render phase, React constructs the virtual DOM by batching the execution of all child component constructors and their render methods. This phase is purely computational and does not involve any direct manipulation of the actual DOM. It allows React to efficiently determine the minimal set of changes needed to update the UI.

2. **Commit Phase**: In the commit phase, React applies the changes calculated during the render phase to the actual DOM. This involves batching and executing lifecycle methods like `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`. The commit phase ensures that the UI is updated in a performant manner, reflecting the latest state and props of the components.





