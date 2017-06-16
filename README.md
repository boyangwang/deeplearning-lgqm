# deeplearning-lgqm

## architecture evolution

### stateful LSTM RNN
Started out with stateful LSTM RNN, because it has all the fancy structures that I think models language well
But, for stateful models, you need to give same shape of input when training and predicting. Specifically, the problem is whether to use big batch size. If I train with batch to speed up, I will have to craft a batch size seed input, to generate output. It's possible but clumsy. Also, even with batch it's slow.

There's another technique to train with big batch size, save the weights and create a new model with 1 as batch size, and use the new model to predict. That avoids the caveat too.

### stateless LSTM RNN
Then tried stateless LSTM RNN. This one worked ok. When training on 100kb sample text (it splits into 35k chunks), it gradually gives a sparse_categorical_crossentropy loss as low as 1.3. It generate reasonable output, and even overfit a little bit (healthy level of overfitting). It does take whole sentences sometimes from original text, but it does turn to other paragraphes rather than keep regurgitating original text

But it still trains slowly. On the sample it takes 160s. On 300x sized full text, it needs 160s * 300 = 900m = 15h per epoch. And surprisingly, loss is not going down much during 1 epoch (probably because it keeps seeing new things!)

### improvement - divide training set
It's not fruitful to use full text for each epoch. You can't poke and test and save weights during the 15h. So adjustment is that each time it will use a randomly selected portion from full text.

Note, if you suddenly see consistent incredible improvement, don't be too happy too soon. Check if you are training on the same batch again and again.

### much bigger batch size
Doesn't work - it's made much slower

### CNN
Finally decided to try CNN. Probably reason why it's slow is that RNNs are hard to parallelize. Conside the fact that a few hundred MBs of images consisting of millions of pixels can be processed in reasonable time