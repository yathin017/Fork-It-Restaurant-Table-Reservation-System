

// ignore_for_file: file_names

import 'package:dbms_project/main.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

class LoginPage extends StatelessWidget {
   LoginPage({Key? key}) : super(key: key);

  final _formKey = GlobalKey<FormBuilderState>();

  @override
  Widget build(BuildContext context) {
    return Material(
      child: Container(
        color: Colors.white,
        child: Center(
            child: SizedBox(
              width: MediaQuery.of(context).size.width*0.8,
              child: FormBuilder(
                key: _formKey,
                autovalidateMode: AutovalidateMode.always,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    SizedBox(
                      height: 200,
                      width: MediaQuery.of(context).size.width*0.8,
                      child: Image.asset("assets/images/wooden-spoon.png"),
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    const Text("Fork It !",style: TextStyle(fontSize: 40,fontWeight: FontWeight.bold,fontStyle: FontStyle.italic),),
                    const SizedBox(
                      height: 30,
                    ),
                    FormBuilderTextField(
                      keyboardType: TextInputType.text,
                      name: 'name',
                      onChanged: (value) {

                      },
                      decoration: const InputDecoration(
                        labelText: 'Username',
                        border: OutlineInputBorder(),
                      ),
                      validator: (value) {
                        if (value == null) {
                          return "Please Fill Full Name";
                        }
                        if (value.length < 3) {
                          return "Enter your Full Name";
                        }
                        return null;
                      },
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    FormBuilderTextField(
                      keyboardType: TextInputType.text,
                      name: 'password',
                      obscureText: true,
                      decoration: const InputDecoration(
                        labelText: 'Password',
                        border: OutlineInputBorder(),
                      ),
                      validator: (value) {
                        if (value == null) {
                          return "Please Enter Password";
                        }
                        if (value.length < 8) {
                          return "Please enter more than 8 characters";
                        }
                        return null;
                      },
                    ),
                    const SizedBox(
                      height: 30,
                    ),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: [
                        MaterialButton(
                        color: Colors.white,
                        child: const Icon(Icons.undo),
                        onPressed: () {
                          _formKey.currentState!.reset();
                        },
                      ),
                        MaterialButton(
                          color: Theme.of(context).colorScheme.secondary,
                          child: const Text(
                            "Login",
                            style: TextStyle(color: Colors.black,fontWeight: FontWeight.bold),
                          ),
                          onPressed: () {
                            _formKey.currentState!.save();
                            if (_formKey.currentState!.validate()) {
                              Navigator.push(
                                context,
                                MaterialPageRoute(
                                  builder: (context) =>
                                  const MyHomePage(title: "Fork It")
                                ),
                              );
                            } else {
                            }
                          },
                        ),
                      ],
                    ),
                  ],
                ),
          ),
            )
        ),
      ),
    );
  }
}
