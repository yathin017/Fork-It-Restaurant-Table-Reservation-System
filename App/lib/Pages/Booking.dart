// ignore_for_file: file_names
import 'package:dbms_project/Widgets/PopUp.dart';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';

class BookingPage extends StatefulWidget {
  const BookingPage(
      {Key? key,
      this.title = "Booking Page",
      this.photo = "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/54/b2/bidri-ambience.jpg",
      this.heroTag = "Hero1",
      this.address=""})
      : super(key: key);
  final String title;
  final String photo;
  final String heroTag;
  final String address;


  @override
  State<BookingPage> createState() => _BookingPageState();
}

class _BookingPageState extends State<BookingPage> {
  final _formKey = GlobalKey<FormBuilderState>();
  double hour = 1;
  double minutes = 0;

  int lenName = 0;
  int lenPhone = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: SingleChildScrollView(
        child: Container(
          width: MediaQuery.of(context).size.width,
          color: Colors.white,
          child: Column(
            children: [
              Hero(
                tag: widget.heroTag,
                child: Card(
                  elevation: 50,
                  child: Container(
                    color: Colors.white,
                    height: MediaQuery.of(context).size.height * 0.25,
                    width: MediaQuery.of(context).size.width * 0.95,
                    child: Container(
                      margin: const EdgeInsets.fromLTRB(5, 5, 5, 5),
                      child: Image.network(
                        widget.photo,
                        fit: BoxFit.fill,
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(
                height: 40,
              ),
              Container(
                padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
                width: MediaQuery.of(context).size.width * 0.8,
                color: Colors.white,
                child: FormBuilder(
                  key: _formKey,
                  autovalidateMode: AutovalidateMode.always,
                  child: Column(
                    children: [
                      FormBuilderTextField(
                        keyboardType: TextInputType.text,
                        name: 'name',
                        onChanged: (value) {
                          setState(() {
                            lenName = value!.length;
                          });
                        },
                        inputFormatters: [
                          FilteringTextInputFormatter.allow(
                              RegExp(r'[a-zA-Z ]')),
                          FilteringTextInputFormatter.deny(RegExp(r'[-]')),
                        ],
                        decoration: InputDecoration(
                          labelText: 'Full Name',
                          counterText: lenName.toString() + " Characters",
                          border: const OutlineInputBorder(),
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
                        height: 20,
                      ),
                      FormBuilderTextField(
                        name: 'email',
                        decoration: const InputDecoration(
                          labelText: 'Email',
                          border: OutlineInputBorder(),
                        ),
                        validator: (value) {
                          if (value == null) {
                            return "Please Enter your Email";
                          }
                          bool emailValid = RegExp(
                                  r"^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+")
                              .hasMatch(value);
                          if (!emailValid) {
                            return "Not valid Email";
                          }
                          return null;
                        },
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      FormBuilderTextField(
                        name: 'phone',
                        keyboardType: TextInputType.number,
                        onChanged: (value) {
                          setState(() {
                            lenPhone = value!.length;
                          });
                        },
                        inputFormatters: [
                          FilteringTextInputFormatter.allow(RegExp(r'[0-9]')),
                          LengthLimitingTextInputFormatter(10)
                        ],
                        decoration: InputDecoration(
                          labelText: 'Phone Number',
                          counterText: lenPhone.toString() + " Number",
                          border: const OutlineInputBorder(),
                        ),
                        validator: (value) {
                          if (value == null) {
                            return "Please Your Number";
                          }
                          if (value.trim().length != 10) {
                            return "Please Enter Valid Phone number";
                          }
                          return null;
                        },
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      FormBuilderTextField(
                        name: 'numberOfSeats',
                        keyboardType: TextInputType.number,
                        inputFormatters: [
                          FilteringTextInputFormatter.allow(RegExp(r'[0-9]')),
                          LengthLimitingTextInputFormatter(2)
                        ],
                        decoration: const InputDecoration(
                          labelText: 'No. of Seats',
                          border: OutlineInputBorder(),
                        ),
                        validator: (value) {
                          if (value == null) {
                            return "Please enter Some value";
                          }
                          if (value.isEmpty) {
                            return "Please enter Some value";
                          }
                          if (int.parse(value) == 0) {
                            return "Please Enter a value Greater Than 0";
                          }
                          return null;
                        },
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      FormBuilderDateTimePicker(
                        name: 'date',
                        inputType: InputType.both,
                        firstDate: DateTime.now(),
                        validator: (value) {
                          if (value == null) {
                            return "Enter Date and Time";
                          }
                          if (value.year >= DateTime.now().year) {
                            if (value.month >= DateTime.now().month) {
                              if (value.day > DateTime.now().day) {
                                return null;
                              }
                            }
                          }
                          if (value.day == DateTime.now().day &&
                              value.hour >= DateTime.now().hour) {
                            if (value.minute > DateTime.now().minute) {
                              return null;
                            }
                          }
                          return "Please Choose Some Time in Future";
                        },
                        decoration: const InputDecoration(
                          labelText: 'Appointment Date',
                          border: OutlineInputBorder(),
                        ),
                      ),
                      const SizedBox(
                        height: 20,
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Padding(
                            padding: EdgeInsets.fromLTRB(30, 0, 0, 0),
                            child: Text(
                              "Hour",
                              style: TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.bold),
                            ),
                          ),
                          Slider(
                              value: hour,
                              max: 5,
                              min: 1,
                              label: hour.toInt().toString() +
                                  " Hours " +
                                  minutes.toInt().toString() +
                                  " Minutes",
                              divisions: 4,
                              onChanged: (value) {
                                setState(() {
                                  hour = value;
                                });
                              }),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          const Padding(
                            padding: EdgeInsets.fromLTRB(30, 0, 0, 0),
                            child: Text(
                              "Minutes",
                              style: TextStyle(
                                  fontSize: 20, fontWeight: FontWeight.bold),
                            ),
                          ),
                          Slider(
                              value: minutes,
                              max: 45,
                              min: 0,
                              label: hour.toInt().toString() +
                                  " Hours " +
                                  minutes.toInt().toString() +
                                  " Minutes",
                              divisions: 3,
                              onChanged: (value) {
                                setState(() {
                                  minutes = value;
                                });
                              }),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          MaterialButton(
                            color: Theme.of(context).colorScheme.secondary,
                            child: const Icon(Icons.undo),
                            onPressed: () {
                              _formKey.currentState!.reset();
                            },
                          ),
                          const SizedBox(
                            width: 30,
                          ),
                          MaterialButton(
                            color: Theme.of(context).colorScheme.secondary,
                            child: const Text(
                              "Fork it !",
                              style: TextStyle(color: Colors.black,fontWeight: FontWeight.bold),
                            ),
                            onPressed: () {
                              _formKey.currentState!.save();
                              if (_formKey.currentState!.validate()) {
                                print(_formKey.currentState!.value);
                                confirmationPopUp(
                                    context: context,
                                    formKey: _formKey,
                                    hour: hour,
                                    minutes: minutes,
                                Rname: widget.title,
                                address: widget.address,
                                photo: widget.photo);
                              } else {
                                print("validation failed");
                              }
                            },
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 20,
                      ),
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
}
