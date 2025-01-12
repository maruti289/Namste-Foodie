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