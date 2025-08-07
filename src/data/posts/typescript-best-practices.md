---
title: "TypeScript 最佳实践指南"
date: "2024-01-10"
description: "分享在实际项目中总结的 TypeScript 最佳实践，包括类型设计、泛型使用、错误处理等方面的经验。"
category: "学习笔记"
tags: ["TypeScript", "JavaScript", "最佳实践", "代码质量"]
author: "殷浩玮"
coverImage: "/images/typescript-guide.jpg"
---

# TypeScript 最佳实践指南

TypeScript 作为 JavaScript 的超集，为我们提供了强大的类型系统。在实际项目开发中，如何更好地利用 TypeScript 的特性来提高代码质量和开发效率呢？本文将分享一些实用的最佳实践。

## 🎯 类型设计原则

### 1. 优先使用接口而非类型别名

```typescript
// ✅ 推荐：使用接口
interface User {
  id: string;
  name: string;
  email: string;
}

// ❌ 避免：对于对象类型使用类型别名
type User = {
  id: string;
  name: string;
  email: string;
}
```

**原因：**
- 接口支持声明合并
- 错误信息更清晰
- 性能稍好

### 2. 合理使用联合类型和字面量类型

```typescript
// ✅ 推荐：使用字面量类型限制取值
type Status = 'pending' | 'approved' | 'rejected';
type Theme = 'light' | 'dark' | 'auto';

interface ApiResponse<T> {
  status: Status;
  data?: T;
  error?: string;
}

// 使用示例
const handleResponse = (response: ApiResponse<User[]>) => {
  switch (response.status) {
    case 'approved':
      return response.data; // TypeScript 知道这里 data 一定存在
    case 'rejected':
      throw new Error(response.error);
    default:
      return null;
  }
};
```

## 🔧 泛型最佳实践

### 1. 为泛型参数提供有意义的名称

```typescript
// ❌ 避免：使用无意义的泛型名称
interface Repository<T, U> {
  findById(id: U): Promise<T | null>;
  create(entity: T): Promise<T>;
}

// ✅ 推荐：使用有意义的泛型名称
interface Repository<TEntity, TKey = string> {
  findById(id: TKey): Promise<TEntity | null>;
  create(entity: TEntity): Promise<TEntity>;
}
```

### 2. 使用泛型约束

```typescript
// ✅ 推荐：使用泛型约束
interface Identifiable {
  id: string;
}

function updateEntity<T extends Identifiable>(
  entity: T,
  updates: Partial<Omit<T, 'id'>>
): T {
  return { ...entity, ...updates };
}

// 使用示例
const user = { id: '1', name: 'John', email: 'john@example.com' };
const updatedUser = updateEntity(user, { name: 'Jane' }); // ✅ 正确
// const invalidUpdate = updateEntity(user, { id: '2' }); // ❌ 编译错误
```

### 3. 条件类型的应用

```typescript
// 创建一个工具类型，提取函数的返回类型
type ReturnTypeOf<T> = T extends (...args: any[]) => infer R ? R : never;

// 创建一个工具类型，使某些属性可选
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// 使用示例
interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
}

// id 和 createdAt 是可选的，其他必填
type UpdateUserRequest = PartialBy<CreateUserRequest, 'password' | 'role'>;
```

## 🛡️ 错误处理最佳实践

### 1. 使用 Result 类型模式

```typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

async function fetchUser(id: string): Promise<Result<User, string>> {
  try {
    const response = await api.get(`/users/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

// 使用示例
const handleFetchUser = async (id: string) => {
  const result = await fetchUser(id);
  
  if (result.success) {
    console.log(result.data.name); // TypeScript 知道 data 存在
  } else {
    console.error(result.error); // TypeScript 知道 error 存在
  }
};
```

### 2. 自定义错误类型

```typescript
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public value: unknown
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(`${resource} with id ${id} not found`);
    this.name = 'NotFoundError';
  }
}

// 类型守卫
function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError;
}
```

## 📦 模块和命名空间

### 1. 使用模块而非命名空间

```typescript
// ✅ 推荐：使用模块
// utils/validation.ts
export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8;
};

// ❌ 避免：使用命名空间
namespace Validation {
  export const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
}
```

### 2. barrel exports 模式

```typescript
// types/index.ts - barrel export
export type { User, CreateUserRequest, UpdateUserRequest } from './user';
export type { Post, CreatePostRequest } from './post';
export type { ApiResponse, Result } from './common';

// 使用时只需要一个导入
import { User, Post, ApiResponse } from '@/types';
```

## 🎨 React + TypeScript 最佳实践

### 1. 组件 Props 类型定义

```typescript
// ✅ 推荐：清晰的 Props 接口
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  disabled = false,
  loading = false,
  onClick,
  children,
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};
```

### 2. 自定义 Hook 类型

```typescript
interface UseApiOptions<T> {
  initialData?: T;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

function useApi<T>(
  url: string,
  options: UseApiOptions<T> = {}
): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(options.initialData || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      options.onSuccess?.(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error');
      setError(error);
      options.onError?.(error);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
}
```

## 🔍 工具类型的应用

### 1. 实用的工具类型

```typescript
// 深度只读
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// 深度可选
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// 提取对象的值类型
type ValueOf<T> = T[keyof T];

// 创建联合类型
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;
```

### 2. API 类型生成

```typescript
// 基于 API 响应自动生成类型
type ApiEndpoints = {
  'GET /users': { response: User[] };
  'POST /users': { body: CreateUserRequest; response: User };
  'GET /users/:id': { params: { id: string }; response: User };
  'PUT /users/:id': { params: { id: string }; body: UpdateUserRequest; response: User };
};

type ApiCall<T extends keyof ApiEndpoints> = ApiEndpoints[T];

// 使用示例
async function apiCall<T extends keyof ApiEndpoints>(
  endpoint: T,
  options: Omit<ApiCall<T>, 'response'>
): Promise<ApiCall<T>['response']> {
  // API 调用逻辑
  throw new Error('Not implemented');
}
```

## 📋 配置和工具

### 1. tsconfig.json 推荐配置

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

### 2. ESLint 规则推荐

```json
{
  "extends": [
    "@typescript-eslint/recommended",
    "@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-floating-promises": "error"
  }
}
```

## 📝 总结

TypeScript 最佳实践的核心在于：

1. **类型安全**：充分利用类型系统防止运行时错误
2. **可读性**：清晰的类型定义提高代码可读性
3. **可维护性**：良好的类型设计降低维护成本
4. **开发体验**：合理使用工具类型提高开发效率

记住，TypeScript 的目标不是限制你，而是帮助你写出更安全、更可维护的代码。在实际项目中，要根据团队情况和项目需求，逐步采用这些最佳实践。

---

**推荐资源：**
- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [TypeScript 深入理解](https://github.com/type-challenges/type-challenges)
- [utility-types 库](https://github.com/piotrwitek/utility-types) 