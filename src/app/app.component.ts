import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Job } from './job.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  jobs: Job[] = []
  roles: string[] = ['Frontend', 'Backend', 'Fullstack'];
  levels: string[] = ['Junior', 'Midweight', 'Senior'];
  languages: string[] = ['Python', 'JavaScript', 'Ruby', 'PHP'];
  tools: string[] = ['React', 'Sass', 'Ruby', 'RoR'];
  filters: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadJsonData();
  }

  loadJsonData() {
    const jsonFileUrl = 'assets/data/data.json';
    this.http.get(jsonFileUrl).subscribe((data: any) => {
      this.jobs = data;
      console.log(this.jobs);
    });
  }


  addFilter(filter: string) {
    if (!this.filters.includes(filter)) {
      this.filters.push(filter);
      this.filterJobs();
    }
  }

  removeFilter(filter: string) {
    this.filters = this.filters.filter((f) => f !== filter);
    this.filterJobs();
  }

  clearFilters() {
    this.filters = [];
    this.loadJsonData();
  }

  filterJobs() {
    this.loadJsonData();
    const filters = this.filters;
    const jobs = this.jobs;
    const filteredJobs = jobs.filter((job) => {
      const jobLanguages = [...job.languages, ...job.tools];
      return filters.every((filter) => jobLanguages.includes(filter));
    });
    this.jobs = filteredJobs;
  }
}
