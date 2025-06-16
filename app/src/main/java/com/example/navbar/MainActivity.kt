package com.example.navbar

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.clickable
import androidx.compose.foundation.Image
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Icon
import androidx.compose.material.icons.Icons as MaterialIcons // Alias for material icons
import androidx.compose.material.icons.outlined.AddCircle
import androidx.compose.material.icons.outlined.Add
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Divider
import androidx.compose.material3.Scaffold
import androidx.compose.material3.DropdownMenuItem
import androidx.compose.material3.Text
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.NavigationBarItem
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.platform.LocalSoftwareKeyboardController
import androidx.compose.ui.draw.clip
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.KeyboardArrowUp
import androidx.compose.material.icons.filled.KeyboardArrowDown
import androidx.compose.material.icons.filled.Home
import androidx.compose.material.icons.filled.Person
//import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.TopAppBarDefaults
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.material3.ExposedDropdownMenuBox
import androidx.compose.material.icons.filled.AccountCircle
import androidx.compose.material.icons.filled.Settings
import androidx.compose.material.icons.outlined.AccountCircle
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.compose.material.icons.Icons // Default import for Icons
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview



class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            AppNavigation()
        }
    }
}

// Sealed class for nav items
sealed class BottomNavItem(val route: String, val icon: ImageVector, val title: String) {
    object Home : BottomNavItem("home", MaterialIcons.Filled.Home, "Home")
    object Add : BottomNavItem("add", MaterialIcons.Outlined.AddCircle, "Add")
    object Profile : BottomNavItem("profile", MaterialIcons.Filled.Person, "Profile")
    object Settings : BottomNavItem("settings", MaterialIcons.Filled.Settings, "Settings")
}

// Screens
@Composable
fun HomeScreen() {
    Box(modifier = Modifier.fillMaxSize()) {
        val expenseItems = listOf(
            "Expense 1" to "20.00", "Expense 2" to "30.00", "Expense 3" to "50.00", "Expense 4" to "10.00",
            "Expense 5" to "15.00", "Expense 6" to "25.00", "Expense 7" to "5.00", "Expense 8" to "40.00",
            "Expense 9" to "35.00", "Expense 10" to "45.00"
        )

        Column(
            modifier = Modifier
                .padding(16.dp)
                .verticalScroll(rememberScrollState())
        ) {
            expenseItems.forEach { (expense, amount) ->
                InfoCard(title = expense, value = amount)
            }
        }
    }
}

@Composable
fun ProfileScreen() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Image(
            painter = painterResource(id = R.drawable.chatgpt),
            contentDescription = "Profile Picture",
            modifier = Modifier
                .size(120.dp)
                .clip(CircleShape) // Clip the image to a circle
                .background(Color.LightGray, CircleShape), // Background for the circular shape
            contentScale = ContentScale.Crop
        )
        Spacer(modifier = Modifier.height(16.dp))
        Text(
            text = "Ajith Kumar",
            fontSize = 24.sp,
            fontWeight = FontWeight.Bold
        )
        Spacer(modifier = Modifier.height(8.dp))
        Text(
            text = "ajithajith72389@gmail.com",
            fontSize = 16.sp,
            color = Color.Gray
        )
        Spacer(modifier = Modifier.height(24.dp))
        InfoCard(title = "Total Spent", value = "500.00") // Example data
        InfoCard(title = "Remaining Balance", value = "1500.00") // Example data
        InfoCard(title = "Last Transaction", value = "Lunch - 20.00") // Example data
    }


}

@Composable
fun SettingsScreen(navController: NavHostController) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(MaterialTheme.colorScheme.background) // Use theme background color
            .padding(16.dp)
    ) {
        Text(
            text = "Settings",
            style = MaterialTheme.typography.headlineMedium, // Use theme typography
            fontWeight = FontWeight.Bold,
            modifier = Modifier.align(Alignment.CenterHorizontally)
        )
        Spacer(modifier = Modifier.height(24.dp))

        // Group settings items in Cards for better visual separation
        SettingsSection(title = "Account Settings") {
            SettingsItem(
                icon = MaterialIcons.Outlined.AccountCircle,
                title = "Profile",
                onClick = {
                    navController.navigate(BottomNavItem.Profile.route) {
                        popUpTo(navController.graph.findStartDestination().id)
                    }
                }
            )
            SettingsItem(
                icon = MaterialIcons.Outlined.Add,
                title = "Payment Methods",
                onClick = {

                })
        }

        SettingsSection(title = "App Settings") {
            SettingsItem(icon = MaterialIcons.Filled.Settings, title = "App Preferences")
            SettingsItem(icon = MaterialIcons.Filled.Home, title = "Notifications")
            SettingsItem(icon = MaterialIcons.Outlined.Add, title = "Privacy & Security")
        }

        SettingsSection(title = "Support") {
            SettingsItem(icon = MaterialIcons.Filled.AccountCircle, title = "Help & Support")
            SettingsItem(icon = MaterialIcons.Filled.Settings, title = "About")
        }
    }
}

@Composable
fun SettingsSection(title: String, content: @Composable ColumnScope.() -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 8.dp),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp) // Add subtle elevation
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Text(text = title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
            Spacer(modifier = Modifier.height(8.dp))
            content()
        }
    }
}

@Composable
fun SettingsItem(icon: ImageVector, title: String, onClick: (() -> Unit)? = null) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .clickable(enabled = onClick != null) { onClick?.invoke() }
            .padding(vertical = 16.dp), // Increased padding for better touch targets
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = icon,
            contentDescription = title,
            modifier = Modifier.size(24.dp)
        )
        Spacer(modifier = Modifier.width(16.dp))
        Text(text = title, style = MaterialTheme.typography.bodyLarge) // Use theme typography
    }
    Divider(color = Color.LightGray, thickness = 0.5.dp) // Add a subtle divider
}

@OptIn(ExperimentalComposeUiApi::class, ExperimentalFoundationApi::class,
    ExperimentalMaterial3Api::class
)
@Composable
fun AddScreen (

) {
    // Use a mutableStateListOf for dynamic changes to the list
    val expenseCategories = remember { mutableStateListOf("Food", "Snacks", "Petrol", "Grocery", "Other") }

    var selectedCategory by remember { mutableStateOf(expenseCategories[0]) }
    var expanded by remember { mutableStateOf(false) }
    var customExpenseDescription by remember { mutableStateOf("") }
    var amount by remember { mutableStateOf("") }
    val keyboardController = LocalSoftwareKeyboardController.current

    val isOtherSelected = selectedCategory == "Other"

    val scrollState = rememberScrollState()

    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
            .padding(16.dp)
            .verticalScroll(scrollState) // Make the column scrollable
            .imePadding(), // Add padding for the IME (keyboard)
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text("Add New Expense", fontSize = 24.sp, fontWeight = FontWeight.Bold)
        Spacer(modifier = Modifier.height(24.dp))

        // Expense Category Dropdown
        ExposedDropdownMenuBox(
            expanded = expanded,
            onExpandedChange = { expanded = !expanded }
        ) {
            OutlinedTextField(
                value = selectedCategory,
                onValueChange = {},
                readOnly = true,
                label = { Text("Expense Category") },
                trailingIcon = {
                    Icon(
                        imageVector = if (expanded) Icons.Filled.KeyboardArrowUp else Icons.Filled.KeyboardArrowDown,
                        contentDescription = if (expanded) "Close" else "Open"
                    )
                },
                modifier = Modifier
                    .fillMaxWidth()
                    .menuAnchor() // Important for ExposedDropdownMenuBox
                    .padding(bottom = 8.dp)
            )
            ExposedDropdownMenu(
                expanded = expanded,
                onDismissRequest = { expanded = false }
            ) {
                expenseCategories.forEach { category ->
                    DropdownMenuItem(
                        text = { Text(category) },
                        onClick = {
                            selectedCategory = category
                            expanded = false
                        }
                    )
                }
            }
        }
        Spacer(modifier = Modifier.height(16.dp))

        if (isOtherSelected) {
            OutlinedTextField(
                value = customExpenseDescription,
                onValueChange = { customExpenseDescription = it },
                label = { Text("Specify Other Expense") },
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(bottom = 8.dp),
                singleLine = true,
                keyboardOptions = androidx.compose.foundation.text.KeyboardOptions.Default.copy(
                    imeAction = androidx.compose.ui.text.input.ImeAction.Next
                )
            )
            Spacer(modifier = Modifier.height(16.dp))
        }

        OutlinedTextField(
            value = amount,
            onValueChange = { amount = it },
            label = { Text("Amount") },
            keyboardOptions = androidx.compose.foundation.text.KeyboardOptions(
                keyboardType = KeyboardType.Number,
                imeAction = androidx.compose.ui.text.input.ImeAction.Done
            ),
            keyboardActions = androidx.compose.foundation.text.KeyboardActions(
                onDone = { keyboardController?.hide() }
            ),
            modifier = Modifier
                .fillMaxWidth()
                .padding(bottom = 8.dp), // Add some bottom padding
            singleLine = true
        )
        Spacer(modifier = Modifier.height(24.dp))

        Button(
            onClick = {
                if (isOtherSelected) {
                    if (customExpenseDescription.isNotBlank() && !expenseCategories.contains(customExpenseDescription)) {
                        expenseCategories.add(customExpenseDescription)
                        selectedCategory = customExpenseDescription
                    }
                }
                selectedCategory = expenseCategories[0] // Reset to default
                customExpenseDescription = ""
                amount = ""
                keyboardController?.hide()
            },
            modifier = Modifier.fillMaxWidth() // Make button take full width
        ) {
            Text("Add Expense", fontSize = 16.sp)
        }
    }
}

// Bottom Nav App with Navigation
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BottomNavApp() {
    val navController = rememberNavController()
    Scaffold(
        topBar = {
            TopAppBar(
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = Color(0xFF3F51B5),
                    titleContentColor = Color.White,
                ),
                title = {
                    Text(
                        text = "Petty Cash",
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier
                            .fillMaxWidth()
                            .wrapContentWidth(Alignment.CenterHorizontally)
                    )
                }
            )
        },
        bottomBar = {
            BottomNavigationBar(navController)
        },
    ) { padding ->
        // Apply only bottom padding
        val bottomPadding = padding.calculateBottomPadding()
        NavHost(
            navController = navController,

            startDestination = BottomNavItem.Home.route,
            modifier = Modifier.padding(padding)
        ) {
            composable(BottomNavItem.Home.route) { HomeScreen() }
            composable(BottomNavItem.Add.route) { AddScreen() }
            composable(BottomNavItem.Profile.route) { ProfileScreen() }
            composable(BottomNavItem.Settings.route) { SettingsScreen(navController) }
        }
    }
}

// Bottom Nav Bar UI
@Composable
fun BottomNavigationBar(navController: NavHostController) {
    val items = listOf(
        BottomNavItem.Home,
        BottomNavItem.Add,
        BottomNavItem.Profile,
        BottomNavItem.Settings
    )
    NavigationBar {
        val navBackStackEntry by navController.currentBackStackEntryAsState()
        val currentRoute = navBackStackEntry?.destination?.route

        items.forEach { item ->
            NavigationBarItem(
                icon = { Icon(item.icon, contentDescription = item.title) },
                label = { Text(item.title) },
                selected = currentRoute == item.route,
                onClick = {
                    if (currentRoute != item.route) {
                        navController.navigate(item.route) {
                            popUpTo(navController.graph.findStartDestination().id) {
                                saveState = true
                            }
                            launchSingleTop = true
                            restoreState = true
                        }
                    }
                }
            )
        }
    }
}

@Composable
fun InfoCard( title : String, value : String){
    Card (
        modifier = Modifier
            .fillMaxWidth()
            .padding(6.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(6.dp),
            horizontalArrangement = Arrangement.SpaceBetween
        ) {
            Text(
                text = title,
                fontSize = 18.sp,
                modifier = Modifier
                    .padding(16.dp)

            )

            Text(
                text = value ,
                fontSize = 18.sp,
                modifier = Modifier
                    .padding(16.dp)
            )
        }
    }
}

@Composable
fun AppNavigation() {
    val navController = rememberNavController()

    NavHost(navController = navController, startDestination = "login") {
        composable("login") {
            LoginScreen(
                navController = navController
            )
        }

        composable("home") {
            BottomNavApp() // This manages its own inner nav for bottom nav bar
        }
    }
}



@Preview(showBackground = true, showSystemUi = true, device = "id:Galaxy Nexus")
@Composable
fun BottomNavAppPreview() {
//    BottomNavApp()
//    AddScreen()
//    ProfileScreen()
//    SettingsScreen()
//    HomeScreen()
//    LoginScreen()
      AppNavigation()
}

