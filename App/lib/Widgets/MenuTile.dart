// ignore_for_file: file_names

import 'package:dbms_project/Pages/Booking.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import '../extradata.dart';
import 'Button.dart';

Widget menuTile(
    {String title = "Resturant",
    String address = "Address",
    String photo = "https://docs.flutter.dev/assets/images/dash/dash-fainting.gif",
    double stars = 1,
    String herotag = "Hero1",
    required BuildContext context}) {
  return Card(
    elevation: 20,
    child: Container(
      height: 270,
      color: MaterialColor(0xFF81c784,colorCodes),
      child: Center(
        child: Column(
          children: [
            Hero(
              tag: herotag,
              child: Card(
                elevation: 20,
                child: Container(
                  color: MaterialColor(0xFFa5d6a7,colorCodes),
                  height: 180,
                  width: MediaQuery.of(context).size.width * 0.85,
                  child: Container(
                    margin: const EdgeInsets.fromLTRB(5, 5, 5, 5),
                    child: Image.network(
                      photo,
                      fit: BoxFit.fill,
                      loadingBuilder: (BuildContext context, Widget child,
                          ImageChunkEvent? loadingProgress) {
                        if (loadingProgress == null) return child;
                        return Center(
                          child: CircularProgressIndicator(
                            value: loadingProgress.expectedTotalBytes != null
                                ? loadingProgress.cumulativeBytesLoaded /
                                loadingProgress.expectedTotalBytes!
                                : null,
                          ),
                        );
                      },
                    ),
                  ),
                ),
              ),
            ),
            Card(
              elevation: 20,
              child: Container(
                height: 62,
                width: MediaQuery.of(context).size.width * 0.85,
                color: MaterialColor(0xFFdcedc8,colorCodes),

                child: Row(
                  mainAxisAlignment: MainAxisAlignment.start,
                  children: [
                    Container(
                        color: Colors.white,
                        width: 20,
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            SizedBox(
                              height: 15,
                              child: Center(
                                child: Text(
                                  stars.toInt().toString(),
                                  style: const TextStyle(fontSize: 10),
                                ),
                              ),
                            ),
                            Container(
                              color: MaterialColor(0xFFdcedc8,colorCodes),
                              height: 47,
                              child: ListView.builder(
                                  itemCount: stars.toInt(),
                                  reverse: true,
                                  itemBuilder: (BuildContext context, index) {
                                    return const Icon(
                                      Icons.star,
                                      color: Colors.amber,
                                      size: 9,
                                    );
                                  }),
                            ),
                          ],
                        )),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(13, 0, 0, 0),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Padding(
                            padding: const EdgeInsets.fromLTRB(0, 5, 0, 0),
                            child: Text(
                              title,
                              style: const TextStyle(
                                  fontSize: 15, fontWeight: FontWeight.bold),
                            ),
                          ),
                          const SizedBox(
                            height: 1,
                          ),
                          Padding(
                            padding: const EdgeInsets.fromLTRB(0, 0, 0, 10),
                            child: Container(
                              height: 25,
                              width: MediaQuery.of(context).size.width * 0.45,
                              color: MaterialColor(0xFFdcedc8,colorCodes),
                              child: Text(
                                address,
                                style: const TextStyle(
                                    fontSize: 10,
                                    fontWeight: FontWeight.w700,
                                    overflow: TextOverflow.clip,
                                    color: Colors.black54),
                              ),
                            ),
                          )
                        ],
                      ),
                    ),
                    const Expanded(child: SizedBox()),
                    Padding(
                        padding: const EdgeInsets.fromLTRB(0, 0, 10, 0),
                        child: buttonMaker("Book Now", () {
                          Navigator.push(
                            context,
                            MaterialPageRoute(
                              builder: (context) =>
                                  BookingPage(title: title,photo: photo,heroTag: herotag,address: address,),
                            ),
                          );
                        }, context))
                  ],
                ),
              ),
            )
          ],
        ),
      ),
    ),
  );
}
