## Features

- Provide a way to store entity activities
- Provide easy to use options by default

## Installation

```bash
$ npm i --save nest-typeorm-object-activites
```

## Usage

If we want to track activities for our User entity we should create following entity:

```
@Entity()
export class UserActivity extends Activity {
  @ManyToOne(() => User)
  sourceObject: User;
}
```

After that we should add entity to imports in our module as well as add ActivityModule for this newly created entity with second parameter as baseUrl

```
imports: [TypeOrmModule.forFeature([User, UserActivity]), ActivityModule.forFeature(UserActivity, 'user')],
```

No we can use new endpoints to store and list all activities for particular object with replacing `<related object id>` with user id:

```
### create activity
POST {{APP_URL}}/activity/user/<related object id>
Content-Type: application/json

{
  "description": "test description"
}

### get activities
GET {{APP_URL}}/activity/user/<related object id>
```
