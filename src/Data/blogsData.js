// blogsData.js - Senior Software Engineer Articles & Unsplash Visuals
const blogs = [
  {
    id: "net10-architecture",
    slug: "architecting-high-throughput-apis-with-.net-10-&-minimal-apis",
    title: "Architecting High-Throughput APIs with .NET 10 & Minimal APIs",
    excerpt: "A complete guide to building ultra-fast, low-allocation RESTful microservices in .NET 10, leveraging C# 13 enhancements, Native AOT compilation, and Entity Framework Core 10 query tuning.",
    date: "2026-02-10",
    readTime: 7,
    category: ".NET 10",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "⚡",
    tags: [".NET 10", "C#", "Microservices", "Native AOT", "Performance"],
    branch: "main/net10-architecture",
    commits: 18,
    views: 420,
    lastCommit: "Yesterday",
    content: `
# Architecting High-Throughput APIs with .NET 10 & Minimal APIs

In modern cloud-native architectures, API throughput and low memory footprint are critical metrics for enterprise backend systems. With the release of **.NET 10**, Microsoft has further refined Native AOT (Ahead-of-Time) compilation and runtime memory allocations, making C# one of the fastest languages for web microservices.

---

## Key Performance Improvements in .NET 10

1. **Native AOT by Default**: Sub-millisecond startup times and drastically lower memory consumption (RAM usage reduced by up to 60%).
2. **Minimal API Interceptors**: Zero-reflection routing pipelines that compile endpoints into static C# code during build time.
3. **C# 13 Params Collections**: Avoid array allocation overhead when passing variable parameters to hot execution paths.

---

## Clean Architecture Code Example

Here is a modern, low-allocation Minimal API endpoint written for .NET 10:

\`\`\`csharp
var builder = WebApplication.CreateSlimBuilder(args);

builder.Services.ConfigureHttpJsonOptions(options => {
    options.SerializerOptions.TypeInfoResolverChain.Insert(0, AppJsonContext.Default);
});

var app = builder.Build();

app.MapGet("/api/v1/payments/{id:guid}", async (Guid id, PaymentDbContext db, CancellationToken ct) =>
{
    var payment = await db.Payments
        .AsNoTracking()
        .FirstOrDefaultAsync(p => p.Id == id, ct);

    return payment is not null 
        ? Results.Ok(payment) 
        : Results.NotFound(new { Error = "Payment record not found." });
})
.WithName("GetPaymentById")
.WithTags("Payment Engine");

app.Run();
\`\`\`

---

## Production Benchmark Results

By eliminating reflection in your JSON serialization pipelines and configuring Entity Framework Core queries with \`AsNoTracking()\`, a single .NET 10 API instance can comfortably process **over 50,000 requests per second** on standard cloud VMs.
`
  },
  {
    id: "docker-containerization",
    slug: "production-docker-&-multi-stage-containerization-guide",
    title: "Production Docker & Multi-Stage Containerization Guide",
    excerpt: "Best practices for building minimal, zero-vulnerability Docker container images for .NET Core, Node.js, and Spring Boot applications with rootless runtime security.",
    date: "2026-02-05",
    readTime: 6,
    category: "Docker",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "🐳",
    tags: ["Docker", "Containers", "DevOps", "Security", "Deployment"],
    branch: "feature/docker-hardening",
    commits: 14,
    views: 385,
    lastCommit: "2 days ago",
    content: `
# Production Docker & Multi-Stage Containerization Guide

Containerizing web applications requires a strict balance between image size, build speed, and runtime security. Shipping multi-gigabyte development images into production increases deployment latency and expands your attack surface.

---

## The Power of Multi-Stage Builds

Multi-stage Docker builds allow you to compile your application in a heavy build environment, then extract *only* the compiled binaries into a lightweight runtime image.

### Optimized Dockerfile for .NET Applications:

\`\`\`dockerfile
# Stage 1: Build & Compile
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build-env
WORKDIR /src

COPY *.csproj ./
RUN dotnet restore

COPY . ./
RUN dotnet publish -c Release -o /app/out --no-restore

# Stage 2: Minimal Runtime Image
FROM mcr.microsoft.com/dotnet/aspnet:10.0-chiseled AS runtime
WORKDIR /app

COPY --from=build-env /app/out .

# Run as non-root user for security
USER $APP_UID
ENTRYPOINT ["dotnet", "PaymentService.dll"]
\`\`\`

---

## Hardening Security Checklist

- **Use Distroless / Chiseled Images**: Removes bash shells, package managers, and unnecessary tools.
- **Enforce Non-Root Users**: Never run containerized processes as root (\`UID 0\`).
- **Read-Only Filesystem**: Mount application directories as read-only at runtime to prevent malicious runtime modifications.
`
  },
  {
    id: "springboot-microservices",
    slug: "enterprise-spring-boot-3-&-reactive-microservices-engineering",
    title: "Enterprise Spring Boot 3 & Reactive Microservices Engineering",
    excerpt: "Building fault-tolerant enterprise backend services using Spring Boot 3, Spring WebFlux, PostgreSQL, and resilient circuit breaker patterns.",
    date: "2026-01-28",
    readTime: 8,
    category: "Spring Boot",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "🍃",
    tags: ["Spring Boot", "Java", "Microservices", "REST API", "PostgreSQL"],
    branch: "main/springboot-services",
    commits: 12,
    views: 310,
    lastCommit: "3 days ago",
    content: `
# Enterprise Spring Boot 3 & Reactive Microservices Engineering

Spring Boot 3 brings first-class support for **Java 21 Virtual Threads (Project Loom)** and **GraalVM Native Images**, transforming traditional Java backend architecture into highly concurrent, reactive systems.

---

## Leveraging Virtual Threads in Spring Boot 3

Virtual threads enable Java applications to handle millions of concurrent HTTP connections with minimal memory overhead, replacing complex reactive callback chains with clean imperative code.

\`\`\`java
@RestController
@RequestMapping("/api/v1/orders")
public class OrderController {

    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderDto> getOrderById(@PathVariable String id) {
        return orderRepository.findById(id)
                .map(order -> ResponseEntity.ok(new OrderDto(order)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
\`\`\`

---

## Resilience Design with Resilience4j

In distributed microservices, failing downstream calls should never crash the entire API. Implementing circuit breakers ensures your system fails gracefully:

\`\`\`yaml
resilience4j.circuitbreaker:
  instances:
    paymentService:
      slidingWindowSize: 10
      failureRateThreshold: 50
      waitDurationInOpenState: 10s
\`\`\`
`
  },
  {
    id: "redis-caching",
    slug: "sub-millisecond-edge-caching-with-redis-&-distributed-redlock",
    title: "Sub-Millisecond Edge Caching with Redis & Distributed Redlock",
    excerpt: "How to implement Redis distributed caching, rate-limiting middleware, and distributed lock synchronization to support heavy concurrent API traffic.",
    date: "2026-01-18",
    readTime: 7,
    category: "Redis",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "🟥",
    tags: ["Redis", "Caching", "Distributed Systems", "Performance", "Scalability"],
    branch: "feature/redis-cluster",
    commits: 15,
    views: 490,
    lastCommit: "4 days ago",
    content: `
# Sub-Millisecond Edge Caching with Redis & Distributed Redlock

When building high-traffic platforms processing thousands of requests per second, querying primary relational databases for hot data introduces performance bottlenecks. **Redis** serves as an in-memory data structure store that reduces database load and achieves sub-millisecond response latencies.

---

## Cache-Aside Pattern Implementation

\`\`\`typescript
import { createClient } from 'redis';

const redis = createClient({ url: process.env.REDIS_URL });
await redis.connect();

export async function getCachedMerchant(merchantId: string) {
  const cacheKey = \`merchant:\${merchantId}\`;
  
  // 1. Try fetching from Redis Cache
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  // 2. Cache Miss: Fetch from PostgreSQL DB
  const dbMerchant = await fetchMerchantFromDb(merchantId);
  
  // 3. Store in Redis with TTL (Time-To-Live) of 1 hour
  if (dbMerchant) {
    await redis.setEx(cacheKey, 3600, JSON.stringify(dbMerchant));
  }

  return dbMerchant;
}
\`\`\`

---

## Preventing Cache Stampede with Distributed Locks

During peak traffic spikes, if a cache key expires, thousands of concurrent requests might query the database simultaneously. Using **Redlock / Distributed Lock** guarantees that only ONE thread refreshes the cache while others wait.
`
  },
  {
    id: "owasp-security",
    slug: "zero-trust-api-security-&-owasp-top-10-hardening",
    title: "Zero-Trust API Security & OWASP Top 10 Hardening",
    excerpt: "Step-by-step guide to securing enterprise web APIs using JWT Bearer tokens, RBAC authorization policies, rate-limiting, CSP headers, and anti-CSRF protection.",
    date: "2026-01-10",
    readTime: 9,
    category: "Security",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "🔒",
    tags: ["Security", "OWASP", "JWT", "Authentication", "API Safety"],
    branch: "main/owasp-hardening",
    commits: 22,
    views: 560,
    lastCommit: "5 days ago",
    content: `
# Zero-Trust API Security & OWASP Top 10 Hardening

Securing modern web APIs requires assuming that all network traffic—internal and external—is untrusted until authenticated, authorized, and validated.

---

## Core Security Pillars

### 1. Cryptographic JWT Bearer Authentication
Always sign JWTs using strong algorithms (RS256 / EdDSA) with short expiration windows (15 minutes) paired with secure refresh token rotation.

### 2. Strict Rate Limiting Middleware
Prevent brute-force authentication attempts and Denial-of-Service attacks by enforcing sliding-window rate limits per client IP or API key.

### 3. Comprehensive Security Headers
Enforce production security headers on all server responses:

\`\`\`http
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Content-Security-Policy: default-src 'self'; script-src 'self'; object-src 'none';
\`\`\`
`
  },
  {
    id: "kafka-event-driven",
    slug: "event-driven-microservices-with-apache-kafka-&-event-sourcing",
    title: "Event-Driven Microservices with Apache Kafka & Event Sourcing",
    excerpt: "Designing resilient, loosely coupled microservices using Apache Kafka event streams, idempotency consumers, and Outbox Pattern architecture.",
    date: "2026-01-02",
    readTime: 9,
    category: "Kafka",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "📡",
    tags: ["Kafka", "Event-Driven", "Microservices", "Architecture", "Streaming"],
    branch: "main/kafka-streaming",
    commits: 20,
    views: 510,
    lastCommit: "6 days ago",
    content: `
# Event-Driven Microservices with Apache Kafka & Event Sourcing

In high-volume distributed systems, direct synchronous HTTP calls between microservices introduce cascading failures and tightly coupled dependencies. **Apache Kafka** enables asynchronous event streaming where services emit state changes as immutable event logs.

---

## The Transactional Outbox Pattern

To prevent data inconsistencies between database commits and Kafka event publishing, implement the Transactional Outbox Pattern:

1. Write business data and the pending event into the same database transaction.
2. An Outbox Processor reads pending events from the database and publishes them to Kafka asynchronously.
3. Mark outbox events as published upon receiving Kafka ACK.

This guarantees **at-least-once message delivery** across your microservices mesh.
`
  },
  {
    id: "saga-distributed-transactions",
    slug: "senior-system-design-designing-distributed-transaction-engines-saga-pattern",
    title: "Senior System Design: Designing Distributed Transaction Engines (Saga Pattern)",
    excerpt: "How to handle multi-service payment transactions without two-phase commit (2PC) bottlenecks using Orchestrated and Choreographed Saga patterns.",
    date: "2025-12-20",
    readTime: 10,
    category: "System Design",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "🏗️",
    tags: ["System Design", "Saga Pattern", "Distributed Systems", "Transactions", "Architecture"],
    branch: "main/saga-orchestrator",
    commits: 24,
    views: 630,
    lastCommit: "1 week ago",
    content: `
# Senior System Design: Designing Distributed Transaction Engines (Saga Pattern)

Traditional ACID database transactions cannot cross microservice network boundaries without expensive lock contention (Two-Phase Commit / 2PC). The **Saga Pattern** breaks a distributed transaction into a series of local transactions, compensating previous steps if a failure occurs.

---

## Orchestrated Saga vs Choreography

- **Choreography**: Each service listens for events and triggers local transactions autonomously. Best for small systems (3-4 services).
- **Orchestration**: A central Saga Orchestrator controls step-by-step workflow execution and compensating actions. Essential for complex financial and payment processing engines.

\`\`\`
Client -> [Saga Orchestrator]
            |--> Step 1: Reserve Inventory (Success)
            |--> Step 2: Charge Payment Gateway (FAILED)
            |--> Compensate Step 1: Release Inventory
\`\`\`
`
  },
  {
    id: "api-performance-benchmarks",
    slug: "api-performance-benchmark-sub-100ms-latency-strategies",
    title: "API Performance Benchmark: Sub-100ms Latency Strategies",
    excerpt: "Proven database indexing, query execution plan tuning, payload compression, and HTTP/3 optimizations to achieve sub-100ms response latencies at scale.",
    date: "2025-12-15",
    readTime: 8,
    category: "Performance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "🚀",
    tags: ["Performance", "Tuning", "Benchmarks", "Databases", "APIs"],
    branch: "perf/sub-100ms-benchmark",
    commits: 16,
    views: 475,
    lastCommit: "2 weeks ago",
    content: `
# API Performance Benchmark: Sub-100ms Latency Strategies

In digital payments and enterprise applications, every 100ms of API latency correlates directly to user drop-offs and lost business revenue. Here is how we engineer sub-100ms response latencies across distributed APIs.

---

## Optimization Blueprint

1. **Covering B-Tree Indexes**: Avoid table scans by indexing all SELECT and WHERE columns in PostgreSQL/SQL Server.
2. **Gzip / Brotli Payload Compression**: Reduce JSON response payload size by up to 70%.
3. **HTTP/2 & HTTP/3 Multiplexing**: Eliminate head-of-line blocking for asset delivery and parallel API fetches.
`
  },
  {
    id: "cicd-deployment-pipelines",
    slug: "automated-zero-downtime-deployment-with-github-actions-ci-cd",
    title: "Automated Zero-Downtime Deployment with GitHub Actions CI/CD",
    excerpt: "Configuring production continuous integration and CD deployment pipelines with automated unit test runners, Docker builds, and rolling cloud deployment strategies.",
    date: "2025-12-05",
    readTime: 7,
    category: "Deployment",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "📦",
    tags: ["CI/CD", "GitHub Actions", "Deployment", "Cloud", "DevOps"],
    branch: "main/cicd-pipeline",
    commits: 19,
    views: 410,
    lastCommit: "3 weeks ago",
    content: `
# Automated Zero-Downtime Deployment with GitHub Actions CI/CD

Continuous Integration and Continuous Deployment (CI/CD) pipelines allow engineering teams to ship code safely to production multiple times a day with zero downtime.

---

## Production GitHub Actions Workflow

\`\`\`yaml
name: Production Deployment CI/CD

on:
  push:
    branches: [ main ]

jobs:
  test-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup .NET SDK
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '10.0.x'

      - name: Run Unit & Integration Tests
        run: dotnet test --configuration Release

      - name: Build Docker Container
        run: docker build -t myapp:latest .

      - name: Deploy to Cloud
        run: echo "Deploying container with zero downtime rolling update..."
\`\`\`
`
  },
  {
    id: "nextjs16-performance",
    slug: "next.js-16-app-router-&-server-component-optimization",
    title: "Next.js 16 App Router & Server Component Optimization",
    excerpt: "Maximizing web application speed with Next.js 16 static rendering, selective client hydration, image prioritization, and zero-CLS layout strategies.",
    date: "2025-11-20",
    readTime: 6,
    category: "Next.js",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "⚛️",
    tags: ["Next.js 16", "React 19", "Frontend", "Performance", "Web Dev"],
    branch: "feature/nextjs16-opt",
    commits: 11,
    views: 390,
    lastCommit: "1 month ago",
    content: `
# Next.js 16 App Router & Server Component Optimization

Next.js 16 and React 19 introduce powerful server-side capabilities that eliminate JavaScript bundle bloat on client browsers.

---

## Key Best Practices

- **Keep Heavy Libraries Server-Side**: Move markdown parsers, database drivers, and heavy encryption libraries into Server Components.
- **Use \`next/image\` with \`priority\` for LCP**: Ensures key hero images load immediately without causing Cumulative Layout Shift (CLS).
- **Stream UI with React Suspense**: Render page skeletons instantly while data streams asynchronously from backend microservices.
`
  },
  {
    id: "postgres-performance",
    slug: "postgresql-performance-tuning-for-high-traffic-apis",
    title: "PostgreSQL Performance Tuning for High-Traffic APIs",
    excerpt: "A hands-on guide to indexing strategies, query plan analysis, connection pooling with PgBouncer, and partitioning for PostgreSQL databases serving millions of requests per day.",
    date: "2026-05-18",
    readTime: 9,
    category: "Performance",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "🐘",
    tags: ["PostgreSQL", "Database", "Performance", "Indexing", "PgBouncer"],
    branch: "feature/db-tuning",
    commits: 27,
    views: 610,
    lastCommit: "3 days ago",
    content: `
# PostgreSQL Performance Tuning for High-Traffic APIs

A poorly optimized database is the #1 bottleneck in high-traffic applications. This guide covers proven techniques to scale PostgreSQL to millions of queries per day.

## Index Strategies That Actually Matter

Most teams over-index, creating write amplification, or under-index, causing sequential scans on large tables.

\`\`\`sql
-- Partial index: only index active users (dramatically smaller, faster)
CREATE INDEX CONCURRENTLY idx_users_active_email
ON users (email)
WHERE status = 'active';

-- Composite index: match query column order exactly
CREATE INDEX CONCURRENTLY idx_orders_user_created
ON orders (user_id, created_at DESC);

-- Covering index: include frequently selected columns to avoid table heap fetch
CREATE INDEX CONCURRENTLY idx_products_cat_price_name
ON products (category_id, price) INCLUDE (name, slug);
\`\`\`

## Reading EXPLAIN ANALYZE Output

\`\`\`sql
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT u.id, u.email, COUNT(o.id) AS order_count
FROM users u
LEFT JOIN orders o ON o.user_id = u.id
WHERE u.created_at > NOW() - INTERVAL '30 days'
GROUP BY u.id;
\`\`\`

Key signals to watch:
- **Seq Scan** on large tables = missing index
- **Hash Join** vs **Index Nested Loop** = wrong join strategy
- **Buffers: hit** vs **read** = cache miss ratio

## Connection Pooling with PgBouncer

A single PostgreSQL instance supports ~100 concurrent connections before performance degrades. PgBouncer sits in front and multiplexes thousands of app connections onto a pool of 20–50 server connections.

\`\`\`ini
[databases]
myapp = host=127.0.0.1 port=5432 dbname=myapp

[pgbouncer]
pool_mode = transaction
max_client_conn = 5000
default_pool_size = 40
reserve_pool_size = 10
reserve_pool_timeout = 5
\`\`\`

## Table Partitioning for Time-Series Data

\`\`\`sql
CREATE TABLE events (
  id BIGSERIAL,
  user_id INT NOT NULL,
  event_type VARCHAR(50),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
) PARTITION BY RANGE (created_at);

CREATE TABLE events_2026_q1
  PARTITION OF events
  FOR VALUES FROM ('2026-01-01') TO ('2026-04-01');

CREATE TABLE events_2026_q2
  PARTITION OF events
  FOR VALUES FROM ('2026-04-01') TO ('2026-07-01');
\`\`\`

Partitioning reduces query scan range from 500M rows to 50M rows for time-bounded queries — a 10× speedup with zero application changes.

## Key Takeaways

- Use **partial + composite + covering** indexes based on actual query patterns.
- Run \`EXPLAIN ANALYZE BUFFERS\` for every slow query — never guess.
- Deploy **PgBouncer in transaction mode** between your app and Postgres.
- Partition high-volume tables by time range to keep query scans bounded.
`
  },
  {
    id: "graphql-federation",
    slug: "graphql-federation-building-a-unified-api-gateway",
    title: "GraphQL Federation: Building a Unified API Gateway",
    excerpt: "Learn how to design and implement a federated GraphQL supergraph that unifies multiple microservice APIs, enabling teams to own their own schemas while exposing a single, cohesive endpoint to clients.",
    date: "2026-06-05",
    readTime: 8,
    category: "System Design",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    fallbackIcon: "🔗",
    tags: ["GraphQL", "Federation", "API Gateway", "Microservices", "System Design"],
    branch: "feature/graphql-fed",
    commits: 22,
    views: 490,
    lastCommit: "5 days ago",
    content: `
# GraphQL Federation: Building a Unified API Gateway

As microservices grow, REST API proliferation creates frontend fatigue — dozens of endpoints, multiple auth flows, and waterfall requests. GraphQL Federation solves this with a single supergraph that composes team-owned subgraphs.

## Architecture Overview

\`\`\`
                   ┌─────────────────────┐
  Client ────────► │   Apollo Router     │ (Supergraph Gateway)
                   └──────┬──────┬───────┘
                          │      │
              ┌───────────┘      └──────────────┐
              ▼                                  ▼
    ┌──────────────────┐              ┌──────────────────┐
    │  Users Subgraph  │              │ Orders Subgraph  │
    │  (Node.js/NestJS)│              │  (.NET 10 API)   │
    └──────────────────┘              └──────────────────┘
\`\`\`

## Defining a Federated Entity

In the **Users subgraph**, define the \`User\` entity that other subgraphs can extend:

\`\`\`graphql
# users-subgraph/schema.graphql
type User @key(fields: "id") {
  id: ID!
  email: String!
  displayName: String!
  createdAt: String!
}

type Query {
  me: User
  user(id: ID!): User
}
\`\`\`

In the **Orders subgraph**, extend the \`User\` entity to add order data:

\`\`\`graphql
# orders-subgraph/schema.graphql
extend type User @key(fields: "id") {
  id: ID! @external
  orders(first: Int = 10): [Order!]!
  totalSpent: Float!
}

type Order {
  id: ID!
  total: Float!
  status: OrderStatus!
  createdAt: String!
}
\`\`\`

## Router Configuration

\`\`\`yaml
# router.yaml
supergraph:
  listen: 0.0.0.0:4000

subgraphs:
  users:
    routing_url: http://users-service:3001/graphql
  orders:
    routing_url: http://orders-service:3002/graphql

cors:
  origins:
    - https://app.birukdjn.dev

telemetry:
  tracing:
    otlp:
      endpoint: http://otel-collector:4317
\`\`\`

## Query Planning

When a client sends:

\`\`\`graphql
query GetUserWithOrders {
  me {
    id
    email
    orders(first: 5) {
      id
      total
      status
    }
    totalSpent
  }
}
\`\`\`

The router automatically:
1. Fetches \`me { id, email }\` from Users subgraph
2. Uses the returned \`id\` to fetch \`orders\` and \`totalSpent\` from Orders subgraph
3. Merges results into a single response — zero client coordination required.

## Performance Optimizations

- **DataLoader pattern** in each subgraph to batch N+1 database queries.
- **@defer** directive to stream critical data first, then non-critical data.
- **Persisted queries** to reduce payload sizes by 80% in production.
- **Response caching** at the router layer with Redis for public, cacheable fields.

## Key Takeaways

- Federation lets teams own their schemas independently — no monolithic GraphQL god-schema.
- Apollo Router handles all query planning, auth forwarding, and telemetry.
- Use \`@key\` entities to compose cross-service relationships transparently.
- Always implement DataLoader in subgraphs to prevent N+1 query explosions.
`
  }
];

export default blogs;
