create table if not exists public.employees (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  name text not null,
  address text,
  hourly_rate numeric(10,2),
  canton text,
  source_tax_rate numeric(5,2),
  vacation_rate numeric(5,2),
  created_at timestamptz default now()
);

create table if not exists public.payrolls (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  employee_id uuid references public.employees(id) on delete set null,
  month text not null,
  hours numeric(10,2),
  net_hourly numeric(10,2),
  gross_total numeric(10,2),
  net_total numeric(10,2),
  pdf_url text,
  created_at timestamptz default now()
);

alter table public.employees enable row level security;
alter table public.payrolls enable row level security;

create policy "employees_select_own" on public.employees for select using (auth.uid() = user_id);
create policy "employees_insert_own" on public.employees for insert with check (auth.uid() = user_id);
create policy "employees_update_own" on public.employees for update using (auth.uid() = user_id);
create policy "employees_delete_own" on public.employees for delete using (auth.uid() = user_id);

create policy "payrolls_select_own" on public.payrolls for select using (auth.uid() = user_id);
create policy "payrolls_insert_own" on public.payrolls for insert with check (auth.uid() = user_id);
create policy "payrolls_update_own" on public.payrolls for update using (auth.uid() = user_id);
create policy "payrolls_delete_own" on public.payrolls for delete using (auth.uid() = user_id);
