import 'dart:html';
import 'package:angular2/core.dart';
import 'package:google_maps/google_maps.dart';

@Component(
    selector: "map-control",
    templateUrl: "map_component.html",
    styleUrls: const <String>["map_component.css"]
)
class GoogleMap implements AfterViewInit {

  GMap _map;
  Marker _aMarker, _bMarker;

  @ViewChild("mapArea")
  ElementRef mapAreaRef;

  @override
  ngAfterViewInit() async {
    print("Getting the geolocation...");
    var loc = await window.navigator.geolocation.getCurrentPosition();
    var pos = loc.coords;
    _map = new GMap(mapAreaRef.nativeElement,
        new MapOptions()
          ..center = new LatLng(pos.latitude, pos.longitude)
          ..zoom = 5);
    _aMarker = _createMarker(_map, "Home", _map.center);
  }

  Marker _createMarker(GMap map, String label, LatLng pos) {
    final marker = new Marker(new MarkerOptions()
      ..map = _map
    // ignore: conflicting_dart_import
      ..animation = Animation.DROP
      ..draggable = true
      ..label = label
      ..position = pos
    );

    // ignore: conflicting_dart_import
    marker.onDrag.listen((MouseEvent e) => print(e));
    return marker;
  }

  String format(LatLng pos) =>
      pos == null ? null : '${pos.lat.toStringAsFixed(4)},${pos.lng
          .toStringAsFixed(4)}';

}