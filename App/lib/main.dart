import 'package:dbms_project/Pages/ContactUs.dart';
import 'package:dbms_project/Pages/LoginPage.dart';
import 'package:dbms_project/Pages/allbookings.dart';
import 'package:dbms_project/Services.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'Widgets/MenuTile.dart';
import 'extradata.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'DBMS Project Fork It',
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          primarySwatch: MaterialColor(0xFF2962ff, colorCodes),
        ),
        // home: const MyHomePage(title: 'Fork It',),
        home: LoginPage());
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({
    Key? key,
    required this.title,
  }) : super(key: key);
  final String title;
  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: const Icon(Icons.local_restaurant_sharp),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => const MyBookings(),
              ),
            );
          },
        ),
        title: Text(
          widget.title,
          style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 23),
        ),
        actions: [
          IconButton(
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => const contactUs(),
                ),
              );
            },
            icon: const Icon(
              Icons.help_outlined,
              size: 30,
            ),
          )
        ],
      ),
      body: Container(
        color: MaterialColor(0xFFa5d6a7, colorCodes),
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                height: 90,
                color: MaterialColor(0xFFa5d1a7, colorCodes),
                child: Center(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(10, 15, 0, 10),
                    child: SizedBox(
                      width: MediaQuery.of(context).size.width * 0.9,
                      child: const Text(
                        "Choose your restaurant... Book your favourite Table",
                        style: TextStyle(
                          fontWeight: FontWeight.w900,
                          fontFamily: 'Open Sans',
                          fontSize: 20,
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              Container(
                height: MediaQuery.of(context).size.height * 0.8,
                width: MediaQuery.of(context).size.width * 0.95,
                color: MaterialColor(0xFFa5d6a7, colorCodes),
                child: ListView.builder(
                  itemCount: MenuItems.length,
                  itemBuilder: (BuildContext context, int index) {
                    return menuTile(
                      title: MenuItems[index].name,
                      address: MenuItems[index].address,
                      stars: MenuItems[index].stars,
                      photo: MenuItems[index].photo,
                      herotag: "Hero" + index.toString(),
                      context: context,
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
