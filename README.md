# Clash-Of-Clans-API
Author: Daniel Ramirez

Created a Node.js Server and Vue.js Application that allows users to interact with Clash of Clans API.

# 🛠 Installation & Set Up
1. Install the files
```
npm install
```

# 🛠 Buiding and running the API
1. Launch Server.js
```
node server.js
```
2. Launch the local host
```
http://localhost:8888/
```


# Running the Application
1. Main Menu
<img src="https://github.com/Dramir99/Clash-Of-Clans-API/blob/main/clash_of_clans_example_images/Main_Menu.jpg" alt="Main Menu"/>

- type in the search bar to search for a clan in the API
- all names of a Clan must have 3 or more letters

2. Populate the Database
---
- Allows you to populate the Data with your own .csv file
---
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/Populate_Database.jpg" alt="Database Menu" />

3. Database
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/Linked_List_Menu_Example.jpg" alt="Database Menu" />

Database Menu to click if you want to:

- Add a Node
- Delete a Node
- Delete Last Node
- Delete First Node
- Delete any Node
- Get a Node's Category from the Main List
- Get a Node's Category from the Sub-list
- Update list to a new category
- Get the size of the Main List
- Get the size of the respective Sub-List
- Clear the List

3. Add a Node
---
- Need to type in the three parameters. 
- These parameters are the values of the categories in a Node.
---

4. Delete Last Node
---
- Allows you to delete the last Node from the List
---

5. Delete First Node
---
- Allows you to delete the first Node from the List
---

6. Delete Any Node
---
- method shall delete a specific node from anywhere in the list, given the mainIndex and subIndex.
---

# you can delete a specific Node to delete
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/Delete_Node_Example.jpg" alt="Delete any Node Menu" />

7. Get a Node's Category from the Main List
---
- method shall have an mainIndex, which is an index (starting from 0) which indicates the Node from the main branch you want to retrieve.
---

# You can retreive a Node Category from the main List
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/Get_Category_Example.jpg" alt="Get Category Menu" />

8. get a Node's category from the sub-list
---
- This method shall have an subIndex, which is an index (starting from 0) which indicates the Node from the sub-list of the chosen main branch Node.
- This method shall have another integer parameter, category, which is a category number (1 - 3) that will indicate which category's value you want to retrieve.
---

# You can retreive a Node Category from the Sub-List
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/Get_Sub_Category.jpg" alt="Get Sub Category Menu" />

9. Update list to a new Category
---
-  regrouping your LinkedList based on the given regrouping category number.
- Ex: I could take the above list from the diagram, which was initially grouped based on the Genre category (category 1), and I could regroup the list based on the ESRB Rating category (category 3).
---

# You can retreive a Node Category from the Sub-List
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/Regroup_the_List.jpg" alt="Regrouping Menu" />

10. Get the size of the Main list
---
- return the size of the Main list.
---

11. Get the size of the Sub-List relative to the Main-List
---
- return the size of the sub-list at the given index.
---

12. Clear the List
---
- Allows you to clear the list.
---

13. View the List
# List with Node's grouped based on category 1
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/LinkedList_Diagram_Category_1.jpg" alt="List with Category 1" />

# List with Node's grouped based on category 2
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/LinkedList_Diagram_Category_2.jpg" alt="List with Category 2" />

# List with Node's grouped based on category 3
<img src="https://github.com/Dramir99/Linked-List-with-Sub-list/blob/main/Linked_List_Example/LinkedList_Diagram_Category_3.jpg" alt="List with Category 3" />
