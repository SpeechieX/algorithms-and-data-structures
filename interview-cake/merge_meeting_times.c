// #include <stdio.h>
// #include <stdlib.h>
// #include <string.h>

// #define MAX_OUTPUT_LENGTH 100

// typedef struct {
//     unsigned int startTime;
//     unsigned int endTime;
// } Meeting;

// size_t mergeRanges(const Meeting *input, size_t inputLength, Meeting *output, size_t maxOutputLength) {
//     for (int i=0; i<inputLength; i++) {
//         if (input[i].endTime >= input[i+1].startTime) {

//             struct Meeting new_meeting = malloc(sizeof(Meeting));
//             new_meeting.startTime = input[i].startTime;
//             new_meeting.endTime = input[i+1].endTime;

//         }
//         printf("start: %d | and end: %d\n", new_meeting.startTime, new_meeting.endTime);
        
//     }
    

//     return 1;
// }

// int main() {
//     const Meeting meetings[] = { {1, 3}, {2, 4} };
//     const Meeting expected[] = { {1, 4} };

//     const Meeting *o[MAX_OUTPUT_LENGTH];
    

//     mergeRanges(meetings, 2, o, MAX_OUTPUT_LENGTH);

//     return 0;
// }