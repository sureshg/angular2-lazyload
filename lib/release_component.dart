import 'dart:convert';
import 'dart:html';
import 'dart:async';
import 'package:angular2/core.dart';

@Component(selector: 'release',
    templateUrl: 'release_component.html',
    styleUrls: const ['release_component.css'])
class ReleaseComponent implements OnInit {

  static const API_URL = "https://api.github.com/repos/dart-lang/angular2/tags";

  List<GithubTag> releases = const [];

  @override
  ngOnInit() async {
    final tags = JSON.decode(await HttpRequest.getString(API_URL)) as List<Map>;
    // Introduce some delay to show lazy loading.
    await new Future.delayed(const Duration(seconds: 3), () => 3);
    releases =
        tags.map((m) => new GithubTag(m["name"], m['commit']['url'])).toList();
  }
}

class GithubTag {
  final String name, url;

  GithubTag(this.name, this.url);
}