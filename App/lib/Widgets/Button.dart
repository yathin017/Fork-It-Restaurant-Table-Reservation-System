
// ignore_for_file: file_names

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../extradata.dart';

Widget buttonMaker(String title,Function() F,BuildContext context){
  return Card(
    elevation: 20,
    child: Material(
      color: MaterialColor(0xFF00796b,colorCodes),
      child: InkWell(
        onTap: F,
        splashColor: Colors.black,
        child: SizedBox(
          height: MediaQuery.of(context).size.height*0.04,
          width: MediaQuery.of(context).size.width*0.17,
          child: Center(
            child: Text(title,style: const TextStyle(fontSize: 12,fontWeight:FontWeight.bold,color: Colors.white),),
          ),
        ),
      ),
    ),
  );
}
