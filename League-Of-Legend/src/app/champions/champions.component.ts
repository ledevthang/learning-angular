import {Component, OnInit} from '@angular/core';
import {ChampionsService} from '../champions.service';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.sass']
})
export class ChampionsComponent implements OnInit {
  list = [];
  arr = {
    icon: '',
    name: '',
    key: '',
    title: '',
    position: '',
    description: '',
  };
  show = false;
  show2 = false;
  show3 = false;
  data;
  root;

  constructor(private service: ChampionsService) {
  }

  ngOnInit() {
    this.service.geturl().subscribe((data: any) => {
      this.list = data;
      const x = JSON.stringify(this.list);
      localStorage.setItem('root', x);
      this.root = localStorage.getItem('root');
    });
  }

  onAdd2() {
    this.arr.icon = 'http://ddragon.leagueoflegends.com/cdn/8.11.1/img/champion/Singed.png';
    this.list.unshift(this.arr);
    this.data = JSON.stringify(this.list);
    localStorage.setItem('add', this.data);
    this.show = !this.show;
  }

  onUpdate(item) {
    this.show = !this.show;
    this.show2 = true;
    this.show3 = false;
    this.arr.name = item.name;
    this.arr.title = item.title;
    this.arr.description = item.description;
    this.arr.key = item.key;
    this.arr.position = item.tags[0];
  }

  commitUpdate() {

  }

  showButton() {
    this.show = !this.show;
    this.show2 = false;
    this.show3 = true;
  }
}
