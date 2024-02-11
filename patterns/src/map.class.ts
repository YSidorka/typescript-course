import { Mappable } from './mappable.interface';
import InfoWindow = google.maps.InfoWindow;

const defaultOptions = {
  zoom: 1,
  center: { lat: 0, lng: 0 }
};

export class CustomMap {
  private googleMap: google.maps.Map;
  private infoWindow: google.maps.InfoWindow;

  constructor(el: HTMLElement, options = defaultOptions) {
    if (!el) return;
    this.googleMap = new google.maps.Map(el, options);
    this.infoWindow = new InfoWindow();
  }

  addMarker(obj: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: obj.location,
      clickable: true,
      title: obj.markerContent()
    });

    marker.addListener('click', () => {
      this.infoWindow.setContent(marker.getTitle());
      this.infoWindow.open(this.googleMap, marker);
    });
  }
}
