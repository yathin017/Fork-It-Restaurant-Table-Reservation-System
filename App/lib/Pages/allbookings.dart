import 'package:accordion/accordion.dart';
import 'package:dbms_project/Services.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

class MyBookings extends StatefulWidget {
  const MyBookings({Key? key}) : super(key: key);

  @override
  _MyBookingsState createState() => _MyBookingsState();
}

class _MyBookingsState extends State<MyBookings> {
  Map<int, String> dayData = {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat",
    7: "Sun"
  };
  final _headerStyle = const TextStyle(
      color: Color(0xffffffff), fontSize: 15, fontWeight: FontWeight.bold);

  Widget makeOrderList() {
    List<AccordionSection> x = [];
    for (var index = 0; AllBookings.length > index; index++) {
      var minute=AllBookings[index].from.minute.toString().length==1?"0"+AllBookings[index].from.minute.toString():AllBookings[index].from.minute.toString();
      var hour=AllBookings[index].from.hour.toString().length==1?"0"+AllBookings[index].from.hour.toString():AllBookings[index].from.hour.toString();
      x.add(AccordionSection(
        isOpen: true,
        leftIcon: const Icon(Icons.local_restaurant_sharp, color: Colors.white),
        header: SizedBox(
          child: Text(
            AllBookings[index].Rname +
                " at " +
                hour+
                ":" +
                minute+
                " this " +
                dayData[AllBookings[index].from.weekday].toString(),
            style: _headerStyle,
            overflow: TextOverflow.ellipsis,
          ),
        ),
        contentBorderColor: const Color(0xffffffff),
        content: SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          child: Row(
            children: [
              SizedBox(
                width: MediaQuery.of(context).size.width*0.32,
                child: Image.network(
                  AllBookings[index].photo,
                  fit: BoxFit.contain,
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 30),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      "Address :" + AllBookings[index].Raddress,
                      maxLines: 3,
                      overflow: TextOverflow.ellipsis,
                    ),
                    Text("For " +
                        AllBookings[index].noSeats.toString() +
                        " People"),
                    Text("By " + AllBookings[index].name),
                    Text("Phone :" + AllBookings[index].phone.toString()),
                    Text("Email :" + AllBookings[index].email),
                    MaterialButton(
                      color: Colors.red,
                      onPressed: () {
                        setState(() {
                          AllBookings.removeAt(index);
                        });
                      },
                      child: Row(
                        children: const [Icon(Icons.close), Text("Cancel")],
                      ),
                    )
                  ],
                ),
              ),
            ],
          ),
        ),
      ),);
    }

    return Accordion(
      maxOpenSections: 3,
      headerPadding: const EdgeInsets.symmetric(vertical: 7, horizontal: 15),
      children: x,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          "My Bookings",
          style: TextStyle(fontWeight: FontWeight.bold, fontSize: 23),
        ),
      ),
      body: SizedBox(
        width: MediaQuery.of(context).size.width,
        child: Column(
          children: [
            const SizedBox(
              height: 20,
            ),
            makeOrderList()
          ],
        ),
      ),
    );
  }
}
