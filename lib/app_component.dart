import 'package:angular2/core.dart';
import 'package:angular_lazy/release_component.dart' deferred as release;

@Component(selector: 'my-app',
    templateUrl: 'app_component.html',
    styleUrls: const['app_component.css'])
class AppComponent implements OnInit {

  var name = 'Angular';
  final DynamicComponentLoader _loader;
  final ViewContainerRef _location;

  @ViewChild("container", read: ViewContainerRef)
  ViewContainerRef container;

  AppComponent(this._loader, this._location) {
    print("Creating the app component loader: ${this._loader}, Loc: ${this
        ._location}");
  }

  @override
  ngOnInit() async {
    await release.loadLibrary();
    print("Loading release component...$container");
    _loader.loadNextToLocation(release.ReleaseComponent, container);
  }
}
