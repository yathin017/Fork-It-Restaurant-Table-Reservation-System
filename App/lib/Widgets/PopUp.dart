// ignore_for_file: file_names

import 'package:dbms_project/Pages/allbookings.dart';
import 'package:dbms_project/Services.dart';
import 'package:intl/intl.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

confirmationPopUp(
    {required BuildContext context,
    required dynamic formKey,
    double hour = 0,
    double minutes = 0,
    required String Rname,
    required String address,
    required String photo}) {
  dynamic _formKey = formKey;

  booking b=booking(
    name: _formKey.currentState!.value["name"].toString(),
    email: _formKey.currentState!.value["email"].toString(),
    phone: int.parse(_formKey.currentState!.value["phone"].toString()),
    noSeats: int.parse(_formKey.currentState!.value["numberOfSeats"].toString()),
    photo: photo,
    from: _formKey.currentState!.value["date"],
    till: _formKey.currentState!.value["date"]
      .add(Duration(hours: hour.toInt(), minutes: minutes.toInt())),
  Raddress: address,
    Rname: Rname
  );


  return showDialog(
    context: context,
    builder: (BuildContext context) {
      return AlertDialog(
        content: Stack(
          clipBehavior: Clip.none,
          children: <Widget>[
            Positioned(
              right: -40.0,
              top: -40.0,
              child: InkResponse(
                onTap: () {
                  Navigator.of(context).pop();
                },
                child: const CircleAvatar(
                  child: Icon(
                    Icons.close,
                    color: Colors.white,
                  ),
                  backgroundColor: Colors.red,
                ),
              ),
            ),
            SizedBox(
              height: 200,
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    "Are you Sure ?",
                    style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                  ),
                  Text(
                    "Name : " + b.name,
                    style: const TextStyle(fontSize: 15),
                  ),
                  Text(
                    "Email : " + b.email,
                    style: const TextStyle(fontSize: 15),
                  ),
                  Text(
                    "Phone : " + b.phone.toString(),
                    style: const TextStyle(fontSize: 15),
                  ),
                  Text(
                    "No of Seats : " + b.noSeats.toString(),
                    style: const TextStyle(fontSize: 15),
                  ),
                  Text(
                    "From : " + DateFormat('dd/MM - kk:mm').format(b.from),
                    style: const TextStyle(fontSize: 15),
                  ),
                  Text(
                    "Till : " + DateFormat('dd/MM - kk:mm').format(b.till),
                    style: const TextStyle(fontSize: 15),
                  ),
                  const SizedBox(
                    height: 15,
                  ),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceAround,
                    children: [
                      MaterialButton(
                        height: 30,
                        minWidth: 30,
                        color: Colors.red,
                        child: const Icon(
                          Icons.close,
                          color: Colors.white,
                        ),
                        onPressed: () {
                          Navigator.of(context).pop();
                        },
                      ),
                      MaterialButton(
                        color: Theme.of(context).colorScheme.secondary,
                        child: const Text(
                          "Fork it !!",
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                        onPressed: () {
                          AllBookings.add(b);
                          Navigator.pop(context);
                          Navigator.pop(context);
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) =>
                                  const MyBookings(),
                            ),
                          );
                        },
                      ),
                    ],
                  )
                ],
              ),
            )
          ],
        ),
      );
    },
  );
}
