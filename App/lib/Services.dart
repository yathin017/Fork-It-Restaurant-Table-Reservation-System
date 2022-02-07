// ignore_for_file: file_names

import 'dart:convert';
import 'package:http/http.dart' as http;


class menuItem{
  String name;
  String address;
  double stars;
  String photo;
  menuItem({required this.name,required this.address,required this.stars,required this.photo});
}

class booking {
  String name;
  String email;
  int phone;
  int noSeats;
  DateTime from;
  DateTime till;
  String Rname;
  String Raddress;
  String photo;

  booking({
    required this.name,
    required this.email,
    required this.phone,
    required this.noSeats,
    required this.Raddress,
    required this.Rname,
    required this.from,
    required this.till,
    required this.photo
  });
}


Future Login(var data) async {
  final response = await http
      .get(Uri.parse('"Forkit.com/get/login"'));
  if (response.statusCode == 200) {
    var x;
    return x.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to Login');
  }
}

Future GetResturants(var data) async {
  final response = await http
      .get(Uri.parse('"Forkit.com/get/resturants"'));
  if (response.statusCode == 200) {
    var x;
    return x.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to Get Resturants');
  }
}

Future BookNow(var data) async {
  final response = await http
      .get(Uri.parse('"Forkit.com/post/Book"'));
  if (response.statusCode == 200) {
    var x;
    return x.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to Book');
  }
}

Future Mybookings(var data) async {
  final response = await http
      .get(Uri.parse('"Forkit.com/get/mybookings"'));
  if (response.statusCode == 200) {
    var x;
    return x.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to Fetch My bookings');
  }
}

























List<booking> AllBookings=[
  booking(
      name: "Anand Bachker",
      email: "anand@gmail.com",
      from: DateTime.now(),
      noSeats: 12,
      phone: 123456789,
      Raddress: "Sanai Plaza, 2nd Floor Pillar No: 1301, 1-8-303, Sardar Patel Rd, Sindhi Colony, Begumpet, Hyderabad, Telangana 500003",
      Rname: "Tatva Restaurant",
      till: DateTime.now().add(const Duration(hours: 2)),
    photo: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg"
  )
];

List<menuItem> MenuItems=[
  menuItem(
      name: "Tatva Restaurant",
      address: "Sanai Plaza, 2nd Floor Pillar No: 1301, 1-8-303, Sardar Patel Rd, Sindhi Colony, Begumpet, Hyderabad, Telangana 500003",
      stars: 5,
      photo: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg"
  ),
  menuItem(
      name: "Okra",
      address: "Hyderabad Marriott Hotel & Convention Centre, Tank Bund Road, opposite to Hussain Sagar Lake, Hyderabad, Telangana 500080",
      stars: 4,
      photo: "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/54/b2/bidri-ambience.jpg"
  ),
  menuItem(
      name: "MoMo café",
      address: "1-3-1024, Lower Tank Bund Rd, Bhagyalaxmi Nagar, Kavadiguda, Hyderabad, Telangana 500080",
      stars: 2,
      photo:"https://media-cdn.tripadvisor.com/media/photo-s/10/93/a1/c1/daily-treats.jpg"
  ),
  menuItem(
      name: "Mekong",
      address: "7-1-26 Greenlands Area, Begumpet Rd, Hyderabad, Telangana 500016",
      stars: 4,
      photo:"https://media-cdn.tripadvisor.com/media/photo-s/02/91/4d/73/getlstd-property-photo.jpg"
  ),
  menuItem(
      name: "The Water Front",
      address: "Raj Nagar, 6-3-1240/225/23, PV Narasimha Rao Marg, beside Eat Street, Hyderabad, Telangana 500004",
      stars: 3,
      photo: "https://media-cdn.tripadvisor.com/media/photo-s/1d/30/57/5b/altitude-interior.jpg"
  ),
  menuItem(
      name: "Cafe Nook Cloud Kitchen",
      address: "Flat no 7, Satguru, 142, PG Road, Sindhi Colony, Begumpet, Hyderabad, Telangana 500003",
      stars: 2,
      photo:"https://media-cdn.tripadvisor.com/media/photo-s/1d/30/57/59/altitude-rooftop-outside.jpg"
  ),
];



