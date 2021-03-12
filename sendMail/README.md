# local
```
npm install
```

## 1. 정책 생성
> 아래와 같은 값이 나오도록 IAM에서 정책 수정
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "ses:SendEmail",
                "ses:SendRawEmail"
            ],
            "Resource": "*"
        }
    ]
}
```

reference : https://aws.amazon.com/ko/premiumsupport/knowledge-center/lambda-send-email-ses/


## 2. lambda의 정책 추가
lambda의 역할 > 권한 > 1에서 생성한 정책 연결


## 3. lambda에 트리거를 추가한다.
