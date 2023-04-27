import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent implements OnInit {
  @Input()
  isSidebarOpened = true;
  readonly items = [
    {
      title: 'Dashboard',
      // isOpened: false,
      path: '/',
    },
    {
      title: 'Calendar',
      isOpened: false,
      path: '/calendar',
    },
    {
      title: 'Company',
      isOpened: false,
      children: [
        { title: 'Employees', path: '/company/employees' },
        {
          title: 'Tree',
          path: '/company/tree',
        },
        {
          title: 'OKR',
          path: '/company/okr',
        },
        {
          title: 'Payroll',
          path: '/company/payroll',
        },
        {
          title: 'Vacations and Requests',
          path: '/company/vacations-and-requests',
        },
        { title: 'Time Tracking', path: '/company/time-tracking' },
        { title: 'Events', path: '/company/events' },
      ],
    },
    {
      title: 'Recruitment',
      isOpened: false,
      children: [
        { title: 'Jobs', path: '/recruitment/jobs' },
        { title: 'Applicants', path: '/recruitment/applications' },
        { title: 'Statistics', path: '/recruitment/statistics' },
      ],
    },
    {
      title: 'Profile',
      isOpened: false,
      children: [
        { title: 'My Profile', path: '/profile/my-profile' },
        { title: 'TODO', path: '/profile/todo' },
        {
          title: 'My Calendar',
          path: '/profile/my-calendar',
        },
      ],
    },

    {
      title: 'WebSockets',
      isOpened: false,
      children: [
        { title: 'Gateways', path: '/websockets/gateways' },
        { title: 'Exception filters', path: '/websockets/exception-filters' },
        { title: 'Pipes', path: '/websockets/pipes' },
        { title: 'Guards', path: '/websockets/guards' },
        { title: 'Interceptors', path: '/websockets/interceptors' },
        { title: 'Adapters', path: '/websockets/adapter' },
      ],
    },
    {
      title: 'Microservices',
      isOpened: false,
      children: [
        { title: 'Overview', path: '/microservices/basics' },
        { title: 'Redis', path: '/microservices/redis' },
        { title: 'MQTT', path: '/microservices/mqtt' },
        { title: 'NATS', path: '/microservices/nats' },
        { title: 'RabbitMQ', path: '/microservices/rabbitmq' },
        { title: 'Kafka', path: '/microservices/kafka' },
        { title: 'gRPC', path: '/microservices/grpc' },
        {
          title: 'Custom transporters',
          path: '/microservices/custom-transport',
        },
        {
          title: 'Exception filters',
          path: '/microservices/exception-filters',
        },
        { title: 'Pipes', path: '/microservices/pipes' },
        { title: 'Guards', path: '/microservices/guards' },
        { title: 'Interceptors', path: '/microservices/interceptors' },
      ],
    },
    {
      title: 'Standalone apps',
      isOpened: false,
      path: '/application-context',
    },
    {
      title: 'CLI',
      isOpened: false,
      children: [
        { title: 'Overview', path: '/cli/overview' },
        { title: 'Workspaces', path: '/cli/monorepo' },
        { title: 'Libraries', path: '/cli/libraries' },
        { title: 'Usage', path: '/cli/usages' },
        { title: 'Scripts', path: '/cli/scripts' },
      ],
    },
    {
      title: 'OpenAPI',
      isOpened: false,
      children: [
        { title: 'Introduction', path: '/openapi/introduction' },
        {
          title: 'Types and Parameters',
          path: '/openapi/types-and-parameters',
        },
        { title: 'Operations', path: '/openapi/operations' },
        { title: 'Security', path: '/openapi/security' },
        { title: 'Mapped Types', path: '/openapi/mapped-types' },
        { title: 'Decorators', path: '/openapi/decorators' },
        { title: 'CLI Plugin', path: '/openapi/cli-plugin' },
        { title: 'Other features', path: '/openapi/other-features' },
        { title: 'Migration guide', path: '/openapi/migration-guide' },
      ],
    },
    {
      title: 'Recipes',
      isOpened: false,
      children: [
        { title: 'REPL', path: '/recipes/repl' },
        { title: 'CRUD generator', path: '/recipes/crud-generator' },
        { title: 'SWC (fast compiler)', path: '/recipes/swc' },
        { title: 'Passport (auth)', path: '/recipes/passport' },
        { title: 'Hot reload', path: '/recipes/hot-reload' },
        { title: 'MikroORM', path: '/recipes/mikroorm' },
        { title: 'TypeORM', path: '/recipes/sql-typeorm' },
        { title: 'Mongoose', path: '/recipes/mongodb' },
        { title: 'Sequelize', path: '/recipes/sql-sequelize' },
        { title: 'Router module', path: '/recipes/router-module' },
        { title: 'Swagger', path: '/recipes/swagger' },
        { title: 'Health checks', path: '/recipes/terminus' },
        { title: 'CQRS', path: '/recipes/cqrs' },
        { title: 'Compodoc', path: '/recipes/documentation' },
        { title: 'Prisma', path: '/recipes/prisma' },
        { title: 'Serve static', path: '/recipes/serve-static' },
        { title: 'Commander', path: '/recipes/nest-commander' },
        { title: 'Async local storage', path: '/recipes/async-local-storage' },
        { title: 'Automock', path: '/recipes/automock' },
      ],
    },
    {
      title: 'FAQ',
      isOpened: false,
      children: [
        { title: 'Serverless', path: '/faq/serverless' },
        { title: 'HTTP adapter', path: '/faq/http-adapter' },
        { title: 'Global path prefix', path: '/faq/global-prefix' },
        { title: 'Raw body', path: '/faq/raw-body' },
        { title: 'Hybrid application', path: '/faq/hybrid-application' },
        { title: 'HTTPS & multiple servers', path: '/faq/multiple-servers' },
        { title: 'Request lifecycle', path: '/faq/request-lifecycle' },
        { title: 'Common errors', path: '/faq/common-errors' },
        {
          title: 'Examples',
          externalUrl: 'https://github.com/nestjs/nest/tree/master/sample',
        },
      ],
    },
    {
      title: 'Devtools',
      isNew: true,
      isOpened: false,
      children: [
        { title: 'Overview', path: '/devtools/overview' },
        { title: 'CI/CD integration', path: '/devtools/ci-cd-integration' },
      ],
    },
    {
      title: 'Migration guide',
      isOpened: false,
      path: '/migration-guide',
    },
    {
      title: 'Official courses',
      externalUrl: 'https://courses.nestjs.com/',
    },
    {
      title: 'Discover',
      isOpened: false,
      children: [{ title: 'Who is using Nest?', path: '/discover/companies' }],
    },
    {
      title: 'T-Shirts and Hoodies',
      externalUrl: 'https://nestjs.threadless.com/',
    },
    {
      title: 'Support us',
      isOpened: false,
      path: '/support',
    },
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((ev) => ev instanceof NavigationEnd))
      .subscribe((event) => this.toggleCategory());

    this.toggleCategory();
  }

  toggleCategory() {
    const { firstChild } = this.route.snapshot;
    if (firstChild) {
      if (
        (firstChild.url && firstChild.url[1]) ||
        (firstChild.url &&
          firstChild.routeConfig &&
          firstChild.routeConfig.loadChildren)
      ) {
        const { path } = firstChild.url[0];
        const index = this.items.findIndex(
          ({ title }) => title.toLowerCase() === path
        );
        if (index < 0) {
          return;
        }
        this.items[index].isOpened = true;
        this.items[1].isOpened = false;
      }
    }
  }
}
