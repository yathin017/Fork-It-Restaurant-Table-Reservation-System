// ignore_for_file: file_names

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mailto/mailto.dart';
import 'package:url_launcher/url_launcher.dart';

class contactUs extends StatelessWidget {
  const contactUs({Key? key}) : super(key: key);

  launchMailto() async {
    final mailtoLink = Mailto(
      to: ['forkti@gmail.com'],
      subject: 'Complain',
      body: 'I have Issue regarding',
    );
    await launch('$mailtoLink');
  }


  launchSmsto()async{
    await launch("sms:123456789");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Contact us"),
      ),
      body: SingleChildScrollView(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.start,
            children: [
              const SizedBox(
                height: 50,
              ),
              SizedBox(
                height: 200,
                child: SvgPicture.asset("assets/images/customer_service.svg"),
              ),
             const  SizedBox(
                height: 30,
              ),
              const Text(
                "How can we help you ?",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
              ),
              Container(
                width: MediaQuery.of(context).size.width * 0.8,
                padding: const EdgeInsets.fromLTRB(0, 10, 0, 0),
                child: const Text(
                  "It looks like you are experiencing problems with our app. We are here to help so please get in touch with us",
                  style: TextStyle(fontSize: 16),
                ),
              ),
              const SizedBox(
                height: 60,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Card(
                    elevation: 20,
                    child: Material(
                      color: Colors.amber,
                      child: InkWell(
                        onTap: (){
                          launchSmsto();
                        },
                        splashColor: Colors.green,
                        child: SizedBox(
                          width: 120,
                          height: 120,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: const [
                              Icon(Icons.auto_fix_high,size: 30,),
                              SizedBox(
                                height: 10,
                              ),
                              Text("Chat with us",style: TextStyle(fontSize: 15,fontWeight: FontWeight.bold),)
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                  Card(
                    elevation: 20,
                    child: Material(
                      color: Colors.green,
                      child: InkWell(
                        onTap: () {
                           launchMailto();
                        },
                        splashColor: Colors.amber,
                        child: SizedBox(
                          width: 120,
                          height: 120,
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: const [
                              Icon(Icons.email,size: 30,),
                              SizedBox(
                                height: 10,
                              ),
                              Text("Email us",style: TextStyle(fontSize: 15,fontWeight: FontWeight.bold),)
                            ],
                          ),
                        ),
                      ),
                    ),
                  )
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
