import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';

interface Node {
  name: string;
  children?: Node[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-organization-structure',
  templateUrl: './organization-structure.component.html',
  styleUrls: ['./organization-structure.component.scss'],
})
export class OrganizationStructureComponent {
  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    (node: Node, level: number) => ({
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    }),
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = [
      {
        name: 'CEO',
        children: [
          { name: 'Administration' },
          {
            name: 'Engineering',
            children: [
              { name: 'Development' },
              { name: 'Quality Assurance' },
              { name: 'TechOps' },
            ],
          },
          {
            name: 'Client Services',
            children: [{ name: 'Technical Support' }],
          },
          {
            name: 'Finance',
          },
          {
            name: 'Human Resources',
          },
        ],
      },
    ];
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}
