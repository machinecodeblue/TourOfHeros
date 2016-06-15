import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';
import {Hero} from './hero';
import { Router } from '@angular/router-deprecated';

@Component({
    selector:"my-dashboard",
    templateUrl:'app/dashboard.component.html',
    styleUrls:['app/dashboard.component.css']
})
export /**
 * DashboardComponent
 */
class DashboardComponent implements OnInit{
    heroes: Hero[]=[];
    constructor(
        private router: Router,
        private heroService:HeroService) {
        
    }

    ngOnInit(){
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5))
    }
    gotoDetail(hero:Hero){
        let link = ['HeroDetail',{id:hero.id}];
        this.router.navigate(link);
        
    }
    
}