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
  filters: string[] = [];
  classList: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.updatedClassList();
    this.loadJsonData();
  }

  loadJsonData() {
    const jsonFileUrl = 'assets/data/data.json';
    this.http.get(jsonFileUrl).subscribe((data: any) => {
      this.jobs = data;
      console.log(this.jobs);
      this.filterJobs();
    });
  }

  updatedClassList() {
    if (this.filters.length > 0) {
      this.classList = ["list", "add-margin"];
    } else {
      this.classList = ["list"];
    }
  }

  addFilter(filter: string, filterTwo?: string) {
    if (!this.filters.includes(filter)) {
      this.filters.push(filter);
      if (filterTwo && !this.filters.includes(filterTwo) ) {
        this.filters.push(filterTwo);
      }
      this.updatedClassList();
      this.loadJsonData();
    }
  }

  removeFilter(filter: string) {
    this.filters = this.filters.filter((f) => f !== filter);
    this.updatedClassList();
    this.loadJsonData();
  }

  clearFilters() {
    this.filters = [];
    this.updatedClassList();
    this.loadJsonData();
  }

  filterJobs() {
    console.log("filtering jobs");
    console.log("loaded jobs");
    const filters = this.filters;
    const jobs = this.jobs;
    const filteredJobs = jobs.filter((job) => {
      const jobFilters = [...job.languages, ...job.tools, job.role, job.level];
      return filters.every((filter) => jobFilters.includes(filter));
    });
    this.jobs = filteredJobs;
  }
}
